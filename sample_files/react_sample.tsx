import type { JSX } from 'react';
import { useMemo, useState } from 'react';

interface Todo {
  id: number
  done: boolean
  title: string
}

const initialTodos: Todo[] = [
  {
    id: 1,
    done: false,
    title: 'Review lint results',
  },
  {
    id: 2,
    done: true,
    title: 'Ship eslint config update',
  },
  {
    id: 3,
    done: false,
    title: 'Write docs for consumers',
  },
];

function ReactSample(): JSX.Element {
  const [query, setQuery] = useState('');
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const visibleTodos = useMemo(
    () => todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase())),
    [query, todos],
  );

  function toggleTodo(id: number): void {
    setTodos(items => items.map(item => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery)
      return;

    setTodos(items => [
      ...items,
      {
        id: items.length + 1,
        done: false,
        title: trimmedQuery,
      },
    ]);
    setQuery('');
  }

  return (
    <section className="todo-board">
      <h1>React ESLint Sample</h1>
      <></>

      <section>
        <>
          <div />
          <div />
        </>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Create or filter todos</label>
        <input
          id="todo-input"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Type a todo title"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <button
              type="button"
              onClick={() => toggleTodo(todo.id)}
              aria-pressed={todo.done}
            >
              {todo.done ? 'Undo' : 'Done'}
            </button>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReactSample;
