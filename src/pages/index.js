import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function index() {

  const [Piadas, setPiadas] = useState({})

  const [Nova, setNova] = useState(true)


  useEffect(() => {
    axios.get('https://sv443.net/jokeapi/category/any')
    .then(function (response) {
      setPiadas(response.data)
    })
  
  },[Nova])
  console.log("aqui",Piadas)
  return (
    <div>
    {Piadas.joke}
    {Piadas.setup}
    <div>
    {Piadas.delivery}
    </div>
    <button onClick={() => setNova(!Nova)}>New Joke</button>
    </div>
  )
}
