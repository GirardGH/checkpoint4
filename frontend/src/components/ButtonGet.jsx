import React from "react";
import { Link } from "react-router-dom";

export default function ButtonCreate() {
  return (
    <Link to="/get">
      <button
        type="button"
        className="items-center h-8 px-4 mx-2 border border-transparent text- font-medium shadow-sm text-white bg-[#1423DC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-3xl cursor-pointer"
      >
        <span>Voir les joueurs</span>
      </button>
    </Link>
  );
}
