import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idx, setIdx] = useState(0);

  const getExperienceData = async () => {
    const response = await fetch(url);
    const experienceData = await response.json()
    setExperience(experienceData);
    setLoading(false);
  }

  useEffect(()=>{
    getExperienceData();
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>Page is loading</h1>
      </section>
    )
  }

  const {company, dates, duties, id, title} = experience[idx]
  return (
    <section className="section" key={id}>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {experience.map((exp, index)=>{
            return <button className={`job-btn ${index === idx && 'active-btn'}`} onClick={() => setIdx(index)}>{exp.company}</button>
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index)=>{
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" /> 
                <p>{duty}</p>
              </div>
          )})}
        </article>
      </div>
      <button type="button" className="btn">more info</button>
    </section>
  )
}

export default App
