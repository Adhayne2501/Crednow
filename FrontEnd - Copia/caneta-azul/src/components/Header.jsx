import React from "react";
import logo from "../assets/imgs/logo.png"; 
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-500 py-4 px-6">
      <img src={logo}/>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/contato"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/ajuda"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              Ajuda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
