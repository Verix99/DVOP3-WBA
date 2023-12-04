import './App.css'
import { useState } from 'react';
import TaskCard from "./components/TaskCard"


function App() {
  const [tasks, setTasks] = useState([]); 
  const [itemName, setItemName] = useState("");
  const [itemDisc, setItemDisc] = useState("");

 function addName() {
  if (itemName === "") return alert("Zadejte název úkolu")
  if (itemDisc === "") return alert("Zadejte popis úkolu")

  const task = {
    id: Math.floor(Math.random() * 10000),
    name: itemName,
    disc: itemDisc
  }
  
  setTasks(oldList => [...oldList, task])
  setItemName("")
  setItemDisc("")

  console.log(tasks);
  }

  return (
    <>
      <header>
        <div className="logo">
        <h1>TODO App</h1>
        </div>
        <div className="login">
          <h3>LOGIN</h3>
        </div>
      </header>
      <main>
      <div className="user-wrap">
            <div className="input-user-name">
                <input type="text" id="inputName" placeholder="Zadejte název úkolu" value={itemName} onChange={e => setItemName(e.target.value)}/>
            </div>
            <div className="input-user-disc">
                <input type="text" id='inputDisc' placeholder="Zadejte popis úkolu" value={itemDisc} onChange={e => setItemDisc(e.target.value)}/>
            </div>
            <div className="btn-wrap">
                <button className="btn-add" onClick={() => addName()}>Přidat</button>
            </div>
        </div>
        <section className='task-cards'>
          <ul>
            {tasks.map(task => {
              return(
                <li key={task.id}><TaskCard name={task.name} disc={task.disc}/></li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
