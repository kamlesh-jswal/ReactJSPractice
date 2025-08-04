import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface ToDo {
  id: string;
  todo: string;
  completed: boolean;
}

// Define the context type
interface ToDoContextType {
  todos: ToDo[];
  addToDoItem: (todo: ToDo) => void;
  updateToDoItem: (id: string, todo: string) => void;
  deleteToDoItem: (id: string) => void;
  completeToDoItem: (id: string) => void;
}

// Create the context
const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  addToDoItem: () => {},
  updateToDoItem: () => {},
  deleteToDoItem: () => {},
  completeToDoItem: () => {},
});

// Define props for the provider
interface ToDoProviderProps {
  children: ReactNode;
}
export const ToDoProvider: React.FC<ToDoProviderProps> = ({ children }) => {
  const [todos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    console.log("props1");
    const storedTodos = localStorage.getItem("todos");

    const todos: ToDo[] = JSON.parse(storedTodos || "");
    console.log("todos_context::", todos);
    if (todos && todos.length > 0) {
      setToDos(todos);
    }
  }, []);

  // Load todos from localStorage on mount
  // useEffect(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   if (storedTodos) {
  //     const parsed: ToDo[] = JSON.parse(storedTodos);
  //     if (Array.isArray(parsed)) {
  //       setToDos(parsed);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    // console.log("propsassa2");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDoItem = (todo: ToDo) => {
    console.log("addToDo: ", todo);
    setToDos((prev) => [todo, ...prev]);
  };

  const updateToDoItem = (id: string, tod: string) => {
    const updatedToDos: ToDo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: tod };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  const deleteToDoItem = (id: string) => {
    const updatedToDos = todos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  const completeToDoItem = (id: string) => {
    const updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDoItem,
        updateToDoItem,
        deleteToDoItem,
        completeToDoItem,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => {
  return useContext(ToDoContext);
};
