import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchToUrl = async() => {
    const response = await fetch(url)
    const job = await response.json()

    setJobs(job)
    setLoading(false)


  }

  useEffect(
    () => {
      fetchToUrl()
    }, []
  )

 
 
  if (loading) {
    return (
    <section>
    <h1>Loading...</h1>
  </section>
    );
  }

else{

const { company, dates, duties, title } = jobs[value]
return (

<section className="section">
  <div className="title">
    <h2>experience</h2>
    <div className="underline"></div>
  </div>
  <div className="jobs-center">

    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValue(index)}
            className={`job-btn ${index === value && 'active-btn'}`}
          >
            {item.company}
          </button>
        )
      })}
    </div>
    {/* job info */}
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </article>
  </div>
  <button type="button" className="btn">
    more info
  </button>
</section>
  );
    }
  }

export default App
