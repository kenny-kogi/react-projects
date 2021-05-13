import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const new_tour = tours.filter((tour) => tour.id !== id)
    setTours(new_tour)
  }


  const fetchToUrl = async () => {

    try{  

    const response = await fetch(url);
    const tours = await response.json()
    setLoading(false);
    setTours(tours)

     }catch (error){
    console.log(error);
     }
  
  }



  useEffect( () => {
      fetchToUrl()
  }, [])



  if (loading) {
    return <main><Loading /></main>;
  }

  const fetchTours = () => {
    setLoading(true)
    fetchToUrl()
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return <Tours tours = {tours} removeTour = {removeTour}></Tours>
}

export default App
