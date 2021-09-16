import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState('');
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    // setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
      getTours()
      }, [])
      if (loading) {
        return (
          <div>
            <Loading />
          </div>
        )
   }

  return (
    <main>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      <Tours tours={tours}/>
    </main>
  )
}

export default App
