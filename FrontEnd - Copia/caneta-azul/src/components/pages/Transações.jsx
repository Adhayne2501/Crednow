import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/imgs/logo.png"

const Trasacao = () => {
    const [contaOrigemId, setContaOrigemId] = useState(0);
    const [contaDestinoId, setContaDestinoId] = useState(0);
    const [valorTransferencia, setValorTransferencia] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleTransferencia = async (e) => {
        e.preventDefault();

        // try{
        //     const response = await axios.post('http://127.0.0.1:8000/crednow/transferencia/', {
        //         conta_origem_id: contaOrigemId,
        //         conta_destino_id: contaDestinoId,
        //         valorTransferencia: valorTransferencia
        //     });

        //     setMensagem('Transferência realizada com sucesso');
        //     setErro('');

        //     // Limpar os campos após a transferência

        //     setContaOrigemId('');
        //     setContaDestinoId('');
        //     setValorTransferencia('');

        // }catch (error){
        //     console.error(error.response.data);
        //     setErro('Saldo Insuficiente');
        //     setMensagem('');
        // }
        if (contaOrigemId == 0){
            setErro("Conta Origem precisa ser diferente de 0")
            return
        }
        if (contaDestinoId == 0){
            setErro("Conta Destino precisa ser diferente de 0")
            return
        }
        if (valorTransferencia == 0){
            setErro("Valor precisa ser diferente de 0")
            return
        }
        if (descricao == ''){
            setErro("precisa ter uma descrição")
            return
        }
        try {
            
            const response = await axios.post('http://127.0.0.1:8000/crednow/transferencia/', {
                conta_origem_id: contaOrigemId,
                conta_destino_id: contaDestinoId,
                valor_transferencia: valorTransferencia,
                descricao: descricao
            });
            setErro('');
            setMensagem('Transferência realizada com sucesso');
        }
        catch(err) {
            setErro(err.message);
        }
    };

    return(
        <div className="bg-[#4F4557] flex flex-col items-center justify-center h-screen">
            <img src={Logo} className=""></img>
            {mensagem && <div className="text-[#F4EEE0] mb-4">{mensagem}</div>}
            {erro && <div className="text-red-500 mb-4">{erro}</div>}
            <form onSubmit={handleTransferencia}>
                <div className="mb-4">
                    <label className="block text-[#F4EEE0] text-sm font-bold mb-2" htmlFor="contaOrigemId">
                        Conta de Origem
                    </label>
                    <input type="text"
                        id="contaOrigemId"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={contaOrigemId}
                        onChange={(e) => setContaOrigemId(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#F4EEE0] text-sm font-bold mb-2" htmlFor="contaDestinoId">
                        Conta de Destino
                    </label>
                    <input type="text"
                        id="contaDestinoId"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={contaDestinoId}
                        onChange={(e) => setContaDestinoId(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#F4EEE0] text-sm font-bold mb-2" htmlFor="valorTransferencia">
                        Valor de Transferência
                    </label>
                    <input type="text"
                        id="valorTransferencia"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={valorTransferencia}
                        onChange={(e) => setValorTransferencia(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#F4EEE0] text-sm font-bold mb-2" htmlFor="descricao">
                        Descrição
                    </label>
                    <input type="text"
                        id="descricao"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Realizar Transferência
                </button>
            </form>
        </div>
    );
};

export default Trasacao;