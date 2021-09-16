import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true)
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
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  const deleteTourInfo = (id) => {
     const updatedTours = tours.filter((tour)=> tour.id === id)
     setTours(updatedTours);
   }

  return (
    <main>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      <Tours tours={tours} deleteTourInfo={deleteTourInfo} />
    </main>
  )
}

export default App
