import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CardChallengers from "../components/CardChallengers";

function GetPlayersPage() {
  return (
    <header className="h-screen bg-[#f0f8ff]">
      <div className="flex justify-center text-center items-center bg-gray-700 text-white py-1 font-semibold text-lg md:text-xl">
        <Link to="/">
          <div className="mr-auto">
            <ChevronDoubleLeftIcon className="h-6 w-6" />
          </div>
        </Link>
        <div className="w-full">
          <h1>LES CHALLENGERS</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-20 p-5">
        <CardChallengers />
      </div>
    </header>
  );
}

export default GetPlayersPage;
