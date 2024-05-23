import { useState, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }, [])


  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    if (editId) {
      // Update existing todo
      const updatedTodos = todos.map(item =>
        item.id === editId ? { ...item, todo } : item
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add new todo
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setTodo("");
    saveToLocalStorage()
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id);
    setTodo(todoToEdit.todo);
    setEditId(id);
    saveToLocalStorage()
  };

  const handleDelete = (id) => {
    // Filter out the todo item with the matching id
    const isConfirmed = window.confirm('Are you sure you want to delete this todo?');

    if (isConfirmed) {
      const newTodos = todos.filter(item => item.id !== id);

      // Update the state with the new todos array
      setTodos(newTodos);
      saveToLocalStorage()
    }

  };


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLocalStorage()
  }

  return (
    <>
      <Navbar />
      <div className="todoContainer w-1/2 mx-auto my-5 rounded-xl p-5 bg-[rgba(160,130,193,0.30)] min-h-[80vh] shadow-[-1px_-1px_20px_4px_rgba(0,0,0,0.3)]">
        <div className="flex items-center flex-col">
          <div className="flex justify-center p-2 border-b-[1px] border-slate-600 w-full">
            <h1 className="text-xl font-bold uppercase">todo List</h1>
          </div>
          <div className="flex flex-col p-3 m-3 w-full rounded-xl max-h-full bg-[#c4b7d3bf] shadow-[-1px_-1px_20px_4px_rgba(0,0,0,0.3)]">
            <div className="addTodo flex flex-col p-2 gap-2">
              <h2 className="text-lg w-fit font-medium flex items-center border-b-4 border-b-[#696981b0]">Add a Todo</h2>
              <div className="flex gap-2">
                <input type="text" onChange={handleChange} value={todo} className=" shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] rounded-lg outline-none p-1 w-[80vw]" />
                <button onClick={handleAdd} disabled={todo.length <= 3} className="disabled:opacity-70 disabled:cursor-not-allowed shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] bg-violet-700 hover:bg-violet-900 text-white py-1 px-2 text-sm font-bold rounded-lg transition-all">Save</button>
              </div>
            </div>
            <div className="flex flex-col p-2 pt-0 gap-2">
              <div className="YourTodos">
                <h2 className="text-lg font-medium w-fit flex items-center border-b-4 border-b-[#696981b0]">Your Todos</h2>
              </div>
              <div className="todos flex flex-col gap-3">
                {todos.length == 0 && <div className="flex justify-center items-center p-2">No Todos to display</div>}
                {todos.map(item => {
                  return (<div key={item.id} className=" todo flex items-center justify-between gap-3">
                    <input onChange={handleCheckBox} type="checkbox" className='form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out' checked={item.isCompleted} name={item.id} id="" />
                    <div className={item.isCompleted ? "line-through  shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] text flex items-center rounded-lg w-[80%] bg-[#ad82f1b5] p-2" : "shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] text flex items-center rounded-lg w-[80%] bg-[#ad82f1b5] p-2"}>{item.todo}</div>
                    <div className="button flex gap-2">
                      <button onClick={() => { handleEdit(item.id) }} className="shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] bg-violet-700 hover:bg-violet-900 text-white p-2 text-sm font-bold rounded-lg transition-all"><FaRegEdit /></button>
                      <button onClick={() => { handleDelete(item.id) }} className="shadow-[0px_0px_8px_1px_rgba(0,0,0,0.42)] bg-violet-700 hover:bg-violet-900 text-white p-2 text-sm font-bold rounded-lg transition-all"><MdDelete /></button>
                    </div>
                  </div>)
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
