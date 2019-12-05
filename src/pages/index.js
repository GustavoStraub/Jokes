import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function index() {

  const [Piadas, setPiadas] = useState()
  useEffect(() => {
    axios.get('https://sv443.net/jokeapi/category/any')
    .then(response => {setPiadas(response.data.id)}  )

  },[])
  console.log("aqui",Piadas)
  return (
    <div>
    {Piadas}
    </div>
  )
}
