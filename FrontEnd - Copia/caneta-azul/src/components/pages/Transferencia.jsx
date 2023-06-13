import React from "react";
import Logo from "../../assets/imgs/logo.png"
import { Link } from "react-router-dom";

const Transferencia = () =>{
    return(
        <div className="bg-[#4F4557] flex flex-col items-center justify-center h-screen">
             <img src={Logo} className=""></img>
            <div className="grid grid-cols-2 gap-1">
                <div className="bg-[#F4EEE0] p-4 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Meu Perfil</h3>
                    <p className="text-gray-600 mb-6">
                   
                        Acesse seu perfil aqui!
                    </p>
                    <a href="http://localhost:5173/perfil"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>    
                </div>
                <div className="bg-[#F4EEE0] p-2 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Extratos</h3>
                    <p className="text-gray-600 mb-6">
                        Verifique os extratos de suas transações e mantenha o controle de suas finanças!
                    </p>
                    <a href="http://localhost:5173/extrato"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>
                </div>
                <div className="bg-[#F4EEE0] p-2 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Ajuda</h3>
                    <p className="text-gray-600 mb-6">
                        Precisa de ajuda ou suporte? Encontre respostas para suas perguntas aqui.
                    </p>
                    <a href="http://localhost:5173/ajuda"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>
                </div>
                <div className="bg-[#F4EEE0] p-2 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">PIX</h3>
                    <p className="text-gray-600 mb-6">
                        Pague, Receba e transfira  em menos de um minuto, através do PIX.
                    </p>
                    <a href="http://localhost:5173/transacao"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>
                </div>
                <div className="bg-[#F4EEE0] p-2 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Cartão de Crédito</h3>
                    <p className="text-gray-600 mb-6">
                        Solicite seu cartão de Crédito aqui
                    </p>
                    <a href="http://localhost:5173/solicitacao"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>
                </div>
                <div className="bg-[#F4EEE0] p-2 rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Empréstimo</h3>
                    <p className="text-gray-600 mb-6">
                        Está precisando de uma ajudinha financeira? Solicite um Empréstimo com a gente!
                    </p>
                    <a href="http://localhost:5173/emprestimo"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                        Acessar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Transferencia;