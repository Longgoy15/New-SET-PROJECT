import React, { useRef, useState, useEffect } from 'react'
import { activities } from './activities'
import activityComponents from './components/ActivityComponents'

export default function App() {
  const contentRef = useRef(null)
  const [currentExercise, setCurrentExercise] = useState(null)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [activeComponent, setActiveComponent] = useState(null)

  useEffect(() => {
    // initial content
    if (contentRef.current) {
      contentRef.current.innerHTML = '<h2>Welcome</h2><p>Select an activity.</p>'
    }
  }, [])

  function displayActivity(exId, actId) {
    setCurrentExercise(exId)
    setActiveComponent(null)
    const key = `${exId}-${actId}`
    const Comp = activityComponents[key]
    if (Comp) {
      setActiveComponent(() => <Comp />)
    } else {
      const act = activities[exId] && activities[exId][actId]
      if (act && contentRef.current) {
        contentRef.current.innerHTML = ''
        act(contentRef.current)
      } else if (contentRef.current) {
        contentRef.current.innerHTML = '<p>Activity not found.</p>'
      }
    }
    setOpenSidebar(false)
  }

  return (
    <div>
      <header className="top-header">
        <button className="sidebar-toggle" onClick={() => setOpenSidebar(s => !s)}>☰</button>
        <h2>ITE6 JavaScript Exercises</h2>
        <nav className="top-nav">
          <ul>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#exercises">Exercises</a></li>
          </ul>
        </nav>
      </header>

      <div className="layout">
        <aside className={`sidebar ${openSidebar ? 'open' : ''}`}>
          <button className="sidebar-close" onClick={() => setOpenSidebar(false)}>✕</button>
          <div className="sidebar-panel">
            <h3>Exercises</h3>
            <p className="sidebar-subtitle">Click an exercise to expand activities</p>
            <ul id="exerciseMenu" className="exercise-menu">
              {Object.keys(activities).map(exId => (
                <li key={exId}>
                  <button className={`exercise-link ${currentExercise === Number(exId) ? 'active' : ''}`} onClick={() => setCurrentExercise(Number(exId))}>
                    Exercise {exId}
                  </button>
                  <ul className={`activity-sublist ${currentExercise === Number(exId) ? 'show' : ''}`}>
                    {Object.keys(activities[exId]).map(actId => (
                      <li key={actId}>
                        <button className="activity-item" onClick={() => displayActivity(Number(exId), Number(actId))}>Activity {actId}</button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="main-content">
          <div className="content-box" ref={contentRef} id="contentBox">
            {activeComponent}
          </div>
        </div>
      </div>
    </div>
  )
}
