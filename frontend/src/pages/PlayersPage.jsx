import React from "react";
import FormCreate from "../components/FormCreate";

function PlayersPage() {
  return (
    <div className="">
      <div>
        <img
          src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1675348330/thumbbig-212835_utbh9k.webp"
          alt="Ligue des champions"
          className="w-screen h-56 relatice"
        />
        <div className="text-6xl drop-shadow-xl text-white font-bold absolute top-20 text-center">
          CREATION DE JOUEUR
        </div>
      </div>
      <FormCreate />
    </div>
  );
}

export default PlayersPage;
