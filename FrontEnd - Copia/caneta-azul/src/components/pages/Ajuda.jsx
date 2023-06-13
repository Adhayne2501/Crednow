import React from "react";
import axios from "axios";

class Ajuda extends React.Component {
    state = {
        perguntas: [],
    };
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/crednow/duvidas/")
          .then(resposnse => {
            this.setState({perguntas: resposnse.data});
          })
          .catch(error => {
            console.log(error);
          });
        }

    render() {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#4F4557]">
                <h1 className="text -3x1 font-bold mb-10 text-[#F4EEE0]">Ajuda</h1>
                <div className="w-3/4 bg-[#F4EEE0] rounded-md shadow-md p-4">
                    {this.state.perguntas.map(pergunta => (
                        <div key={pergunta.id} className="mb-4">
                            <h2 className="text-lg font-bold mb-2">{pergunta.titulo}</h2>
                            <p className="text-gray-700">{pergunta.resposta}</p>
                        </div>
                    ))}
                </div>
            </div>
            );
    }}

export default Ajuda;