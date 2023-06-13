import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../assets/imgs/logo.png"

const Perfil = () => {
    const [perfil, setPerfil] = useState({});

    useEffect(() => {
            axios.get(`http://127.0.0.1:8000/crednow/clientes/5/`)
                .then((res) => {
                    setPerfil(res.data);
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);

        return(
            <div className="flex flex-col items-center justify-center h-screen bg-[#4F4557]">
                <img src={Logo} className=""></img>
                    <div className="w-1/4 bg-white rounded-md shadow-md p-6">
                       <p><strong>Nome: </strong>{perfil.nome}</p>
                       <p><strong>CPF: </strong>{perfil.CPF}</p>
                       {perfil.foto && (
                        <img src={perfil.foto} alt="Foto de Perfil" className="mt-4 rounded" />
                       )}
                </div>
                </div>
        );
};

export default Perfil;