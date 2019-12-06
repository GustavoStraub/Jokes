import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function index() {

  const [Piadas, setPiadas] = useState({})
  const [Nova, setNova] = useState(true)
  const [Categoria, setCategoria] = useState("any")
  const [Cor, setCor] = useState("#dcffcc")

  const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
  `
  const Button = styled.button`
  display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.1em 0.1em 0;
 border:0.16em solid rgba(255,255,255,0);
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:${props => props.color || "#fff"};
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 text-align:center;
 transition: all 0.2s;
background-color: ${props => props.background};
:hover{
   border-color: rgba(255,255,255,1);
  }
  `
  const Context = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  height: 20vh;
  align-items: center;
  `
  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
  useEffect(() => {
    axios.get(`https://sv443.net/jokeapi/category/${Categoria}`)
      .then(function (response) {
        setPiadas(response.data)
      })

  }, [Nova, Categoria])

  return (
    <div style={{marginTop: "20vh"}}>
      <Wrapper>
      <h1>Category Filter</h1>
      </Wrapper>
      <Buttons>
        <Button background="blue"  onClick={() => setCategoria("any")}>Any</Button>
        <Button background="green" onClick={() => setCategoria("Miscellaneous")}>Miscellaneous</Button>
        <Button background="gray" onClick={() => setCategoria("Programming")}>Programming</Button>
        <Button background="black" onClick={() => setCategoria("Dark")}>Dark</Button>
      </Buttons>
      <Context>
       <h4> {Piadas.joke} </h4>
       <h4> {Piadas.setup} <br/> {Piadas.delivery} </h4>
      </Context>
      <Buttons>
      <Button background="purple" onClick={() => setNova(!Nova)}>New Joke</Button>
      </Buttons>
      <Wrapper>
        <h2>Change background color</h2>
        </Wrapper>
      <Buttons>
        <Button background="#bcd4ce"  onClick={() => setCor("#dff6f0")}>Light Blue</Button>
        <Button background="#37babd" onClick={() => setCor("#42dee1")}>Blue</Button>
        <Button background="#b6d1a9" onClick={() => setCor("#dcffcc")}>Light Green</Button>
        <Button background="#d1c7b8" onClick={() => setCor("#fff4e4")}>Pastel</Button>
      </Buttons>
      <style global jsx>{`
        body {
          margin: 0;
          pading: 0;
          background:${Cor};
        }
      `}</style>
    </div>
  )
}
