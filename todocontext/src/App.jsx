import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'
import { useToDoContext } from './contexts'


function App() {
  const {todos} = useToDoContext()

  return (
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                        {/* <TodoItem/> */}

                        {/* <h1>shdfksdfhks</h1> */}
                    </div>
                </div>
            </div>
  )
}

export default App
