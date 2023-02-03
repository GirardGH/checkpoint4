/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

function ButtonDelete({ id, setData, data }) {
  const handleClick = () => {
    axios
      .delete(`http://localhost:5000/players/${id}`)
      .then(() => {
        setData(data.filter((player) => player.id_player !== id));
      })
      .catch((error) => console.error(error.message));
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button className="bg-red-500 text-white p-2 rounded" onClick={handleClick}>
      Delete
    </button>
  );
}

export default ButtonDelete;
