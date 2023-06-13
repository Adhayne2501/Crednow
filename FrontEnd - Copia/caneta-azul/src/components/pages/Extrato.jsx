import React, {useState, useEffect} from "react";
import axios from "axios";

const Extrato = () => {
    const [extrato, setExtrato] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/crednow/transferencia/')
            .then((response) => setExtrato(response.data))
            .catch((error)=> console.log(error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#F4EEE0]">
            <h1 className="text -3x1 font-bold mb-10">Extrato</h1>
            <table className="w-3/4 bg-white rounded-md shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-2 text-left">Data</th>
                        <th className="p-2 text-left">Descrição</th>
                        <th className="p-2 text-left">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {extrato.map((item)=>(
                        <tr key={item.id} className="border-b border-gray-300">
                            <td className="p-2">{item.data}</td>
                            <td className="p-2">{item.descricao}</td>
                            <td className="p-2">{item.valor_transferencia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Extrato;