import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  const getExperienceData = async () => {
    const response = await fetch(url);
    const experienceData = response.json()
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

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <button className="job-btn false">TOMMY</button>
          <button className="job-btn active-btn">TOMMY</button>
        </div>
        <article className="job-info">
          <h3>Engineering Intern</h3>
          <h4>cooker</h4>
          <p className="job-date">Nov 2020</p>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, minus!</p>
          </div>
        </article>
      </div>
      <button type="button" className="btn">more info</button>
    </section>
  )
}

export default App
