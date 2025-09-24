import {useState } from 'react'
import api from './assets/services/api'
import Content from './assets/components/Card'

function App() {

  const [cep, setCep] = useState([])
  const [search, setSearc] = useState(``)
  const [encontrado, setEncontrado] = useState(``)
  const [erroConsulta, setErroConsulta] = useState(``)


  async function buscarCep() {
    if (search !== "") {
      setSearc("");

      try {
        const response = await api.get(`${search}/json/`);
        setCep(response.data)
        setEncontrado(`Endereço Encontrado`)
        setErroConsulta(``)
      } catch (error) {
        setErroConsulta(`Endereço nao encontrado`)
        setEncontrado(``)
        

      }
    } else {
      setEncontrado(`CEP Nao foi digitado`)
    }
  }
  return (
    <>

      <div className="container">
        <div className='locale'>
          <svg class="w-8 h-8 text-white emplacement" fill="none" stroke="currentColor" viewBox="0 0 24 24 ">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h2>Consultar CEP</h2>
        <p>Digite o CEP para encontrar o endereço completo</p>

        <div className="menu">
          <input
            type="Number"
            placeholder="Digite o CEP (ex:01310-100)"
            value={search}
            onChange={(e) => setSearc(e.target.value)}
            maxLength={8}
          />
          <button onClick={buscarCep}>Buscar <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div id="results">
          <div >

            <h3>{encontrado}{erroConsulta}</h3>
          </div>

          <Content cep={cep}></Content>
        </div>
      </div>


    </>
  )
}

export default App
