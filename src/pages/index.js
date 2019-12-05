import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function index() {

  const [Piadas, setPiadas] = useState()
  const [Piadas2, setPiadas2] = useState()
  const [Piadas3, setPiadas3] = useState()
  useEffect(() => {
    axios.get('https://sv443.net/jokeapi/category/any')
    .then(function (response) {
      setPiadas(response.data.joke)
      setPiadas2(response.data.setup)
      setPiadas3(response.data.delivery)
    })

  },[])
  console.log("aqui",Piadas)
  return (
    <div>
    {Piadas}
    {Piadas2}
    <div>
    {Piadas3}
    </div>
    </div>
  )
}
