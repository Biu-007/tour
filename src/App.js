import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getToursData = async () => {
    try {
      const resp = await fetch(url)
      const tours = await resp.json()
      setLoading(false)
      setTours(tours)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getToursData()
  }, [])

  const notInterested = (id) => {
    let newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  const refresh = () => {
    getToursData()
  }

  if(isLoading){
    return <Loading></Loading>
  }
  return <main>
    <div className="title">
      <h1>{tours.length === 0 ? "No Tours Left" : "Tours"}</h1>
      <div className="underline"></div>
      {
        tours.length === 0 ?
          <button className="btn" onClick={refresh}>Refresh</button> :
          <p></p>
      }
    </div>
    <Tours tours={tours} notInterested={notInterested}></Tours>

  </main>
}

export default App;
