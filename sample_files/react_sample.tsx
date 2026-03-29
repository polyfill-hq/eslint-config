import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// ============================================
// Interfaces & Types
// ============================================
interface ButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

interface ListItemProps {
  id: string;
  label: string;
  onDelete: (id: string) => void;
}

interface UserListProps {
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}

// ============================================
// Custom Hooks
// ============================================
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const number: number = count; // Example of type annotation

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return { count, increment, decrement };
}

function useFetch(url: string) {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [url]);

  return { data, isLoading, error };
}

// ============================================
// Presentational Components
// ============================================
function CustomButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`button button--${variant}`}
    >
      {children}
    </button>
  );
}

function ListItem({ id, label, onDelete }: ListItemProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li key={id}>
      <span>{label}</span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

// ============================================
// Container Components
// ============================================
function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <CustomButton onClick={increment}>Increment</CustomButton>
      <CustomButton onClick={decrement} variant="secondary">
        Decrement
      </CustomButton>
    </div>
  );
}

function UserList({ users }: UserListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleSelectUser = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleDeleteUser = (id: string) => {
    console.log(`Deleting user: ${id}`);
  };

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  if (users.length === 0) {
    return <div>No users available</div>;
  }

  return (
    <div className="user-list">
      <ul ref={listRef}>
        {sortedUsers.map(({ id, name, email }) => (
          <li
            key={id}
            onClick={() => {
              handleSelectUser(id);
            }}
            className={selectedId === id ? 'selected' : ''}
          >
            <strong>{name}</strong>
            <span>{email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState<
    { id: string; text: string; completed: boolean; }[]
  >([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: `task-${Date.now()}`,
          text: input,
          completed: false,
        },
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos],
  );

  return (
    <div className="todo-list">
      <h2>
        Todos ({completedCount}/{todos.length})
      </h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          placeholder="Add a todo..."
        />
        <CustomButton onClick={addTodo}>Add</CustomButton>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button
              type="button"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================
// Data Fetching Component
// ============================================
function DataFetcher() {
  const { data, isLoading, error } = useFetch(
    'https://api.example.com/data',
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// ============================================
// Modal Component
// ============================================
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }

    return undefined;
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ============================================
// Main App Component
// ============================================
export default function App() {
  const [showModal, setShowModal] = useState(false);

  const sampleUsers = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com' },
  ];

  return (
    <div className="app">

      <header>
        <h1>React ESLint Test Patterns</h1>
      </header>

      <main>
        <section>
          <h2>Counter Example</h2>
          <Counter />
        </section>

        <section>
          <h2>User List Example</h2>
          <UserList users={sampleUsers} />
        </section>

        <section>
          <h2>Todo List Example</h2>
          <TodoList />
        </section>

        <section>
          <h2>Data Fetching Example</h2>
          <DataFetcher />
        </section>

        <section>
          <h2>Modal Example</h2>
          <CustomButton onClick={() => setShowModal(true)}>
            Open Modal
          </CustomButton>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h3>Modal Content</h3>
            <p>This is a modal dialog.</p>
            <CustomButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </CustomButton>
          </Modal>
        </section>
      </main>
    </div>
  );
}
