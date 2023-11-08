import { useState, useEffect } from 'react'

function App() {

  const [idade, setIdade] = useState(2)
  const [cores, setCores] = useState("")
  const [contador, setContador] = useState(0)

  useEffect(()=> {
    setTimeout(()=> {
      setContador((contador) => contador + 1)
      console.log("O contador mudou", contador)
    }, 1000)
  }, [contador])

  function alteraridade(params) {
    setIdade(87)
  }
  return (
    <div>
      <h1>idade: <p>{idade}</p> </h1>
      <h2>{idade}</h2>
      <h1>Contador: {contador}</h1>

      <h1>A cor carregada no estado é: {cores}</h1>

      <button onClick={()=> setCores("azul")}>azul</button>
      <button onClick={()=> setCores("vermelho")}>vermelho</button>
      <button onClick={()=> setCores("amarelo")}>amarelo</button>

    </div>
  ) 
}


export default App