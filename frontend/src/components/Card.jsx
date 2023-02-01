/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/topscorers")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <h1>Card</h1>
      {data &&
        data.map((player) => {
          {
            /* console.log(player); */
          }
          return (
            <div key={player.player.id}>
              <h2>{player.player.name}</h2>
              <img src={player.image_url} alt={player.player.name} />
              <p>{player.player.natinality}</p>
              <p>{player.player.dateOfBirth}</p>
            </div>
          );
        })}
    </>
  );
}
