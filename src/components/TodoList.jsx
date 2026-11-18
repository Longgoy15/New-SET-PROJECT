import React, { useState } from 'react'

export default function TodoList() {
  const [task, setTask] = useState('')
  const [items, setItems] = useState([{ id: 1, text: 'Sample task' }])
  const [nextId, setNextId] = useState(2)

  function addTask() {
    const t = task.trim()
    if (!t) return alert('Please enter a task!')
    setItems(prev => [...prev, { id: nextId, text: t }])
    setNextId(id => id + 1)
    setTask('')
  }

  function removeTask(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div>
      <h1>Mini To-Do List</h1>
      <div className="panel-card" style={{maxWidth:600}}>
        <div style={{display:'flex',gap:10}}>
          <input className="form-input" style={{flex:1}} value={task} onChange={e => setTask(e.target.value)} placeholder="Enter a task..." />
          <button className="btn btn-success" onClick={addTask}>Add</button>
        </div>

        <ul id="todoList" className="card-list" style={{marginTop:15,listStyle:'none',padding:0}}>
          {items.map(it => (
            <li key={it.id} className="card-list-item alt" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span>{it.text}</span>
              <button className="deleteTodo btn btn-danger" style={{fontSize:12}} onClick={() => removeTask(it.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
