import React, { useState } from "react";
import Logo from "../../assets/imgs/logo.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [CPF, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate()
  const handleCPFChange = (event) => {
    setCPF(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/auth/jwt/create', { CPF: CPF, password: senha})
    .then(res=> {
      localStorage.setItem('usuario', JSON.stringify(res.data))
      navigate('/home')
      }
    ).catch(err => {
      console.log(err)
      alert("Credenciais Inválidas, por favor tente novamente!")
    })
  }

  return (
    <>
      <div className="bg-[#4F4557] flex-col min-h-screen w-screen flex items-center justify-center">
        <img src={Logo} className=""></img>
        <div className="bg-[#F4EEE0] rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          {mensagem && <p className="text-red-500 mb-4">{mensagem}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="CPF" className="block mb-1 font-medium">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={CPF}
                onChange={handleCPFChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block mb-1 font-medium">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={handleSenhaChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="submit"
              className="bg-[#0066cc] text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200"
              titles="Entrar"
            />

          </form>
          <Link
            type="submit"
            className="text-center mt-4 text-blue-500 underline"
            to='Cadastro'
          >
            Cadastre-se aqui
          </Link>
        </div>
      </div>
    </>

  );
}

export default Login;