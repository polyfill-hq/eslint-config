import path from 'node:path';

function normalizePath(value) {
  return value.split(path.sep).join('/');
}

function findRootDir(filename, rootDirName) {
  const normalizedFilename = normalizePath(path.resolve(filename));
  const marker = `/${rootDirName}/`;
  const markerIndex = normalizedFilename.lastIndexOf(marker);

  if (markerIndex === -1) {
    return null;
  }

  return normalizedFilename.slice(0, markerIndex + marker.length - 1);
}

function buildAlias(prefix, relativePath) {
  const normalizedRelativePath = normalizePath(relativePath);

  if (!normalizedRelativePath || normalizedRelativePath === '.') {
    return prefix;
  }

  return prefix.endsWith('/')
    ? `${prefix}${normalizedRelativePath}`
    : `${prefix}/${normalizedRelativePath}`;
}

function countLeadingParentSegments(importPath) {
  return importPath.split('/').filter((segment) => segment === '..').length;
}

const noRelativeParentImportsRule = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    schema: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          prefix: { type: 'string', minLength: 1 },
          rootDir: { type: 'string', minLength: 1 },
        },
        required: ['prefix'],
      },
    ],
    messages: {
      noRelativeParentImports: "Replace parent-relative import '{{importPath}}' with '{{aliasPath}}'.",
    },
  },
  create(context) {
    const [{ prefix, rootDir = 'src' } = {}] = context.options;
    const filename = context.filename;

    if (!filename || filename === '<input>') {
      return {};
    }

    const sourceCode = context.sourceCode;

    function checkSource(sourceNode) {
      if (!sourceNode || typeof sourceNode.value !== 'string') {
        return;
      }

      const importPath = sourceNode.value;

      if (!importPath.startsWith('../')) {
        return;
      }

      const rootDirPath = findRootDir(filename, rootDir);

      if (!rootDirPath) {
        return;
      }

      const resolvedPath = normalizePath(path.resolve(path.dirname(filename), importPath));
      const normalizedRootDirPath = normalizePath(rootDirPath);
      const parentSegmentCount = countLeadingParentSegments(importPath);
      const currentDirectory = normalizePath(path.dirname(filename));
      const oneLevelUpDirectory = normalizePath(path.resolve(currentDirectory, '..'));

      if (resolvedPath !== normalizedRootDirPath && !resolvedPath.startsWith(`${normalizedRootDirPath}/`)) {
        return;
      }

      if (parentSegmentCount === 1 && oneLevelUpDirectory !== normalizedRootDirPath) {
        return;
      }

      const relativePath = path.posix.relative(normalizedRootDirPath, resolvedPath);
      const aliasPath = buildAlias(prefix, relativePath);
      const rawSource = sourceCode.getText(sourceNode);
      const quote = rawSource[0] === '"' ? '"' : "'";

      context.report({
        node: sourceNode,
        messageId: 'noRelativeParentImports',
        data: {
          importPath,
          aliasPath,
        },
        fix(fixer) {
          return fixer.replaceText(sourceNode, `${quote}${aliasPath}${quote}`);
        },
      });
    }

    return {
      ImportDeclaration(node) {
        checkSource(node.source);
      },
      ExportAllDeclaration(node) {
        checkSource(node.source);
      },
      ExportNamedDeclaration(node) {
        checkSource(node.source);
      },
    };
  },
};

export default {
  rules: {
    'no-relative-parent-imports': noRelativeParentImportsRule,
  },
};
