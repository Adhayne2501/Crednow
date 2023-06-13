import React, {useState} from "react";
import Logo from "../../assets/imgs/logo.png"
import axios from "axios";

const SolicitacaoCartao = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [renda, setRenda] = useState(0);
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            nome: nome,
            CPF: cpf,
            renda: renda
        };

        axios.post('http://127.0.0.1:8000/crednow/cartao/', data)
        .then(response => {
            console.log(response.data)
            setStatus(response.data.status);
        })
        .catch(error => {
            console.log(error);
            setStatus(error.response.data.error);
            alert('Erro ao enviar solicitação');
        });

        /// Dados vão pro Django mas cai no Catch
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-5/4 bg-[#4F4557]">
            <img src={Logo} className=""></img>
            <form onSubmit={handleSubmit} className="w-1/3 bg-[#F4EEE0] rounded-md shadow-md p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Nome: </label>
                    <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">CPF: </label>
                    <input type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Renda Mensal: </label>
                    <input type="number" value={renda} onChange={(event) => setRenda(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1/2 rounded">Enviar Solicitação</button>
            </form>
            {status && (
                <div className="mt-4 text-white">
                    <h2 className="text-lg font-bold text-white">Status da Solicitação:</h2>
                    <p>{status}</p>
                </div>
            )}
        </div>
    );
};

export default SolicitacaoCartao;