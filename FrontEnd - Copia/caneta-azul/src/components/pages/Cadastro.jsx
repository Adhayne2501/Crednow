import React, {useState} from "react";
import axios from "axios";
import Logo from "../../assets/imgs/logo.png"

const Cadastro = () => {
    const [nome, setNome]  = useState('');
    const [CPF, setCPF] = useState('');
    const [foto, setFoto] = useState(null);
    const [senha, setSenha] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFoto(file);
    };

    const handleSubmit = (event) => {
            event.preventDefault();

            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('CPF', CPF);
            formData.append('password', senha);
            formData.append('foto', foto);

            axios.post('http://127.0.0.1:8000/auth/users/', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response.data);
                alert('Cadastro realizado com sucesso!');
            })
            .catch(error => {
                console.log(error);
                alert('Erro ao cadastrar!');
            });
};

return(
    <div className="flex flex-col items-center justify-center h-screen bg-[#4F4557]">
        <img src={Logo} className=""></img>
        <form onSubmit={handleSubmit} className="w-1/2 bg-[#F4EEE0] rounded-md shadow-md p-6">
            <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome</label>
                <input type="text" id="nome" value={nome} onChange={event => setNome(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
            </div>
            <div className="mb-4">
                <label htmlFor="CPF" className="block text-gray-700 font-bold mb-2">CPF</label>
                <input type="text" id="CPF" value={CPF} onChange={event => setCPF(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
            </div>
            <div className="mb-4">
                <label htmlFor="senha" className="block text-gray-700 font-bold mb-2">Senha</label>
                <input type="password" id="senha" value={senha} onChange={event => setSenha(event.target.value)} className="w-full border-gray-300 border rounded-md p-2" required />
            </div>
            <div className="mb-4">
                <label htmlFor="foto" className="block text-gray-700 font-bold mb-2">Foto</label>
                <input type="file" id="foto" onChange={handleFileChange} className="w-full" accept="image/*" required/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Cadastrar</button>
        </form>
    </div>
);
};

export default Cadastro;