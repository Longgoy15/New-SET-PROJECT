import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import GradeCalculator from './GradeCalculator'

// Exercise 2 components
export function Ex2Act1() {
  useEffect(() => { alert('Exercise2 Activity1'); console.log('First JS program.'); }, [])
  return (
    <div>
      <h1>Exercise 1 - Activity 1</h1>
      <p>Welcome to JavaScript!</p>
    </div>
  )
}

export function Ex2Act2() {
  const name = 'Andrew'; const age = 20; const isStudent = true
  return (
    <div>
      <h1>Exercise 2 - Activity 2: Variables</h1>
      <p>My name is {name}, I am {age} years old. Student: {String(isStudent)}</p>
    </div>
  )
}

export function Ex2Act3() {
  useEffect(() => {
    function calculate(a,b){ console.log('Sum:',a+b); console.log('Difference:',a-b); console.log('Product:',a*b); console.log('Quotient:',a/b); }
    calculate(67,4)
  }, [])
  return (
    <div>
      <h1>Exercise 2 - Activity 3: Simple Calculator</h1>
      <p>Check the console for arithmetic outputs.</p>
    </div>
  )
}

export function Ex2Act4(){
  useEffect(()=>{ const userName = prompt('Enter your name:'); const favNum = prompt('Enter your favorite number:'); alert('Hello ' + userName + '! Your favorite number is ' + favNum + '.'); console.log('User:',userName,'Favorite number:',favNum); },[]) 
  return <div><h1>Exercise 2 - Activity 4: User Input</h1><p>Prompts displayed on load.</p></div>
}

export function Ex2Act5(){
  useEffect(()=>{ const ageInput = parseInt(prompt('Enter your age:'),10) || 0; if (ageInput >= 18) { alert('You are eligible.'); console.log('Eligible: age =', ageInput); } else { alert('You are not eligible.'); console.log('Not eligible: age =', ageInput); } },[])
  return <div><h1>Exercise 2 - Activity 5: Conditional Statements</h1></div>
}

export function Ex2Act6(){
  const [output, setOutput] = useState('')
  useEffect(()=>{
    let out = ''
    out += 'For loop 1 to 10:\n'
    for(let i=1;i<=10;i++){ out += i + ' ' }
    out += '\nWhile loop 10 to 1:\n'
    let j=10; while(j>=1){ out += j + ' '; j-- }
    setOutput(out)
    console.log('For loop 1 to 10:'); for(let i=1;i<=10;i++) console.log(i)
    console.log('While loop 10 to 1:'); let k=10; while(k>=1){ console.log(k); k-- }
  },[])
  return <div><h1>Exercise 2 - Activity 6: Loops</h1><pre style={{background:'#f0f0f0',padding:10,borderRadius:4,whiteSpace:'pre-wrap'}}>{output}</pre></div>
}

export function Ex2Act7(){
  return (
    <div>
      <h1>Exercise 2 - Activity 7</h1>
      <button className="btn btn-primary" onClick={()=>{ alert('Button Clicked!'); console.log('Button was clicked'); }}>Click Me</button>
    </div>
  )
}

// Exercise 3 components
export function Ex3Act1(){
  const [bg, setBg] = useState('#ffffff')
  const colors = ['#FFB6C1', '#FFD700', '#87CEEB', '#90EE90', '#FFB347', '#DDA0DD', '#F0E68C']
  return (
    <div style={{background:bg,padding:8,borderRadius:6}}>
      <h1>Exercise 3 - Activity 1: Change Background Color</h1>
      <p>Click the button to change the background color of the content box.</p>
      <button id="colorBtn" className="btn btn-primary" onClick={()=>{ const c = colors[Math.floor(Math.random()*colors.length)]; setBg(c) }}>Change Background Color</button>
      <div className="text-muted">Current color: <span id="colorValue">{bg}</span></div>
    </div>
  )
}

export function Ex3Act2(){
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      <h1>Exercise 3 - Activity 2: Dark Mode Toggle</h1>
      <p>Toggle between light and dark mode. The entire content box will change.</p>
      <button className="btn btn-dark" onClick={()=>setIsDark(s=>!s)}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>
      <div style={{marginTop:12, padding:12, background:isDark? '#333':'', color:isDark? '#fff':''}}>Preview area</div>
    </div>
  )
}

export function Ex3Act3(){
  const [items, setItems] = useState(['Item 1','Item 2'])
  const [val, setVal] = useState('')
  return (
    <div>
      <h1>Exercise 3 - Activity 3: Add List Items</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter item name" className="form-input small" />
      <button className="btn btn-success" onClick={()=>{ const name = val.trim() || ('Item ' + (items.length+1)); setItems(prev=>[...prev,name]); setVal('')}}>Add Item</button>
      <ul>{items.map((it,i)=><li key={i} className="card-list-item">{it}</li>)}</ul>
    </div>
  )
}

export function Ex3Act4(){
  const [paras, setParas] = useState(['Paragraph 1','Paragraph 2','Paragraph 3','Paragraph 4'])
  return (
    <div>
      <h1>Exercise 3 - Activity 4: Remove Paragraph</h1>
      <p>Click the button below to remove paragraphs one by one.</p>
      <button className="btn btn-danger" onClick={()=>setParas(p=>p.slice(0,-1))}>Remove Paragraph</button>
      <div id="paraContainer">{paras.map((t,i)=><p key={i} className="card-list-item">{t}</p>)}</div>
    </div>
  )
}

export function Ex3Act5(){
  const [text, setText] = useState('')
  return (
    <div>
      <h1>Exercise 3 - Activity 5: Character Counter</h1>
      <input id="charInput" value={text} onChange={e=>setText(e.target.value)} placeholder="Type something..." className="form-input" />
      <p className="form-label">Character Count: <span id="charCount">{text.length}</span> / 100</p>
      <div id="charDisplay" className="card-list-item">Characters: {text.length}</div>
    </div>
  )
}

export function Ex3Act6(){
  const [n1,setN1]=useState(''); const [n2,setN2]=useState(''); const [sum,setSum]=useState(null)
  return (
    <div>
      <h1>Exercise 3 - Activity 6: Addition Calculator</h1>
      <input type="number" id="num1" className="form-input small" value={n1} onChange={e=>setN1(e.target.value)} />
      <input type="number" id="num2" className="form-input small" value={n2} onChange={e=>setN2(e.target.value)} />
      <button className="btn btn-primary" onClick={()=>{ setSum((parseFloat(n1)||0)+(parseFloat(n2)||0)) }}>Calculate</button>
      <div id="result" className="result-box" style={{display: sum === null ? 'none':'block'}}>Sum: <span id="sumValue">{sum}</span></div>
    </div>
  )
}

export function Ex3Act7(){
  const images = [] // user images not migrated
  const [idx,setIdx]=useState(0)
  const [src,setSrc]=useState('')
  return (
    <div>
      <h1>Exercise 3 - Activity 7: Change Image</h1>
      <p>Image rotation requires configuring image paths in the project.</p>
      <img id="dynamicImage" src={src} style={{maxWidth:300,display:'block'}} alt="" />
      <button className="btn btn-primary" onClick={()=>{ if(images.length===0){ alert('No images configured') } else { const n=(idx+1)%images.length; setIdx(n); setSrc(images[n]); } }}>Change Image</button>
    </div>
  )
}

// mapping helper
export const activityComponents = {
  '2-1': Ex2Act1,
  '2-2': Ex2Act2,
  '2-3': Ex2Act3,
  '2-4': Ex2Act4,
  '2-5': Ex2Act5,
  '2-6': Ex2Act6,
  '2-7': Ex2Act7,
  '3-1': Ex3Act1,
  '3-2': Ex3Act2,
  '3-3': Ex3Act3,
  '3-4': Ex3Act4,
  '3-5': Ex3Act5,
  '3-6': Ex3Act6,
  '3-7': Ex3Act7,
  '3-8': TodoList,
  '4-1': GradeCalculator
}

export default activityComponents
