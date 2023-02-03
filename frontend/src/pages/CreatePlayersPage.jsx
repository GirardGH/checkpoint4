/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";
import FormCreate from "../components/FormCreate";

function CreatePlayersPage() {
  return (
    <header className="bg-[#f0f3f6]">
      <div>
        <img
          src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1675348330/thumbbig-212835_utbh9k.webp"
          alt="Ligue des champions"
          className="w-screen h-56 relatice"
        />
        <div className="text-6xl drop-shadow-xl text-white font-bold absolute top-20 text-center">
          CREATION DE JOUEUR
        </div>
        <div className="flex justify-center w-screen">
          <Link to="/">
            <button className="text-center bg-lime-400 rounded font-medium">
              Retour au menu principal
            </button>
          </Link>
        </div>
      </div>
      <FormCreate />
    </header>
  );
}

export default CreatePlayersPage;
