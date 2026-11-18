import React, { useState } from 'react'

export default function GradeCalculator() {
  const [quizCount, setQuizCount] = useState(0)
  const [quizScores, setQuizScores] = useState([])
  const [examScore, setExamScore] = useState('')
  const [mcoScore, setMcoScore] = useState('')

  function updateQuizCount(n) {
    const count = Math.max(0, parseInt(n, 10) || 0)
    setQuizCount(count)
    setQuizScores(prev => {
      const arr = prev.slice(0, count)
      while (arr.length < count) arr.push('')
      return arr
    })
  }

  function setQuizScore(i, v) {
    setQuizScores(prev => {
      const copy = [...prev]
      copy[i] = v
      return copy
    })
  }

  function calcQuizAvg() {
    if (quizScores.length === 0) return null
    const nums = quizScores.map(s => parseFloat(s) || 0)
    const sum = nums.reduce((a, b) => a + b, 0)
    return sum / nums.length
  }

  function getGradeEquiv(score) {
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    return 'F'
  }

  const quizAvg = calcQuizAvg()
  const exam = parseFloat(examScore) || 0
  const mco = parseFloat(mcoScore) || 0
  const hasAny = quizScores.length > 0 || examScore !== '' || mcoScore !== ''

  let finalGrade = null
  if (hasAny && quizAvg !== null) {
    finalGrade = (quizAvg * 0.2) + (exam * 0.3) + (mco * 0.5)
  }

  return (
    <div>
      <h1>Student Grade Calculator</h1>
      <div className="panel-card" style={{maxWidth:500}}>
        <div className="form-group">
          <label className="form-label">Number of Quizzes:</label>
          <input type="number" className="form-input small" min="0" value={quizCount || ''} onChange={e => updateQuizCount(e.target.value)} />
        </div>

        {quizScores.map((q, i) => (
          <div className="form-group" key={i}>
            <label className="form-label">Quiz {i+1} Score :</label>
            <input type="number" className="form-input" min="0" max="100" value={q} onChange={e => setQuizScore(i, e.target.value)} />
          </div>
        ))}

        <div className="form-group">
          <label className="form-label">Exam Score:</label>
          <input type="number" className="form-input" min="0" max="100" value={examScore} onChange={e => setExamScore(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">MCO Score:</label>
          <input type="number" className="form-input" min="0" max="100" value={mcoScore} onChange={e => setMcoScore(e.target.value)} />
        </div>

        <div className="inline-actions">
          <button className="btn btn-secondary" onClick={() => { setQuizCount(0); setQuizScores([]); setExamScore(''); setMcoScore('') }}>Reset</button>
        </div>
      </div>

      <div className="result-box" style={{display: hasAny ? 'block' : 'none'}}>
        <h3>Results</h3>
        <p className="form-label"><strong>Quiz Average:</strong> <span style={{fontSize:18,color:'#007bff'}}>{quizAvg === null ? '--' : quizAvg.toFixed(2)}</span></p>
        <p className="form-label"><strong>Final Grade:</strong> <span style={{fontSize:18,color:'#007bff'}}>{finalGrade === null ? '--' : finalGrade.toFixed(2)}</span></p>
        <p className="form-label"><strong>Grade Equivalent:</strong> <span style={{fontSize:18,color:'#28a745',fontWeight:'bold'}}>{finalGrade === null ? '--' : getGradeEquiv(finalGrade)}</span></p>
      </div>
    </div>
  )
}
