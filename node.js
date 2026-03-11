import globals from 'globals';

import baseConfig from './index.js';

export default baseConfig.append({
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
});
