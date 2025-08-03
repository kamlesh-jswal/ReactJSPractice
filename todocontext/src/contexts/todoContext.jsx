import { useContext, createContext, useState, useEffect } from "react";

// export const ToDoContext = createContext({
//   todos: [
//     {
//       id: 1,
//       todo: "Complete JS",
//       completed: false,
//     },
//   ],
//   addToDo: (todo) => {},
//   updateToDo: (id, todo) => {},
//   deleteToDo: (id) => {},
//   completeToDo: (id) => {},
// });

// Create the context
const ToDoContext = createContext({
  todos: [],
  addToDoItem: (todo) => {},
  updateToDoItem: (id, todo) => {},
  deleteToDoItem: (id) => {},
  completeToDoItem: (id) => {},
});

// export const ToDoProvider = ToDoContext.Provider;
export const ToDoProvider = ({ children }) => {
  const [todos, setToDos] = useState([]);

 useEffect(()=> {
  console.log('props1')
      const todos = JSON.parse(localStorage.getItem('todos'))
      console.log('todos_context::', todos)
      if (todos && todos.length > 0) {
        setToDos(todos)
      }
    }, [])

   useEffect(()=> {
      console.log('propsassa2')
         localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

  const addToDoItem = (todo) => {
    console.log('addToDo: ', todo)
    setToDos((prev)=> [todo, ...prev])
  };

  const updateToDoItem = (id, tod) => {
    const updatedToDos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, todo: tod };
    }
    return todo;
    });
    setToDos(updatedToDos);
  };

  const deleteToDoItem = (id) => {
    const updatedToDos = todos.filter(todo => todo.id !== id);
    setToDos(updatedToDos);
  };

  const completeToDoItem = (id) => {
      const updatedToDos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  return (
    <ToDoContext.Provider
      value={{ todos, addToDoItem, updateToDoItem, deleteToDoItem, completeToDoItem }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => {
  return useContext(ToDoContext);
};
