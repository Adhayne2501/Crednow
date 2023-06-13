import React, { useState } from "react";
import Logo from "../../assets/imgs/logo.png"
import { useNavigate } from "react-router-dom";

function Home() {
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const navigate = useNavigate()

  const handleAgenciaChange = (event) => {
    setAgencia(event.target.value);
  };

  const handleContaChange = (event) => {
    setConta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agencia === '1234' && conta === '1234'){
      setAutenticado(true);
      navigate('/transferencia')
    }else{
      setAutenticado(false);
      alert('Agência ou conta incorretos!');
    }
  };

  return (
    <>
    <div className="bg-[#4F4557] flex-col min-h-screen w-screen flex items-center justify-center">
        <img src={Logo} className=""></img>
      <div className="bg-[#F4EEE0] rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Acesse sua conta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="agencia" className="block mb-1 font-medium">
              Agência
            </label>
            <input
              type="text"
              id="agencia"
              name="agencia"
              value={agencia}
              onChange={handleAgenciaChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="conta" className="block mb-1 font-medium">
              Conta
            </label>
            <input
              type="text"
              id="conta"
              name="conta"
              value={conta}
              onChange={handleContaChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#0066cc] text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            Acessar
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default Home;