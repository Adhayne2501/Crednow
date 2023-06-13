import { useState } from 'react'
import './App.css'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import { Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Transferencia from './components/pages/Transferencia'
import Trasacao from './components/pages/Transações'
import Extrato from './components/pages/Extrato'
import Ajuda from './components/pages/Ajuda'
import Cadastro from './components/pages/Cadastro'
import Perfil from './components/pages/Perfil'
import SolicitacaoCartao from './components/pages/Solicitacao'
import Emprestimo from './components/pages/Emprestimo'

function App() {
  const [count, setCount] = useState(0)
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element:  <Home/>,
  },
  {
    path: "/transferencia",
    element:  <Transferencia/>,
  },
  {
    path: "/transacao",
    element:  <Trasacao/>,
  },
  {
    path: "/extrato",
    element:  <Extrato/>,
  },
  {
    path: "/ajuda",
    element:  <Ajuda/>,
  },
  {
    path: "/cadastro",
    element:  <Cadastro/>,
  },
  {
    path: "/perfil",
    element:  <Perfil/>,
  },
  {
    path: "/solicitacao",
    element:  <SolicitacaoCartao/>,
  },
  {
    path: "/emprestimo",
    element:  <Emprestimo/>,
  }
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


export default App
