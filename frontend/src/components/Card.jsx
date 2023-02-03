/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Card.css";

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
      {data &&
        data.map((player) => {
          return (
            <div className="flip" key={player.player.id}>
              <div className="content">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold text-lg text-white drop-shadow-2xl text-center">
                    {player.player.name}
                  </h1>
                  <div className="front">
                    <p>{player.team.name}</p>
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-20 h-20">
                        <img
                          className="w-20 h-20 rounded-full my-1"
                          src={player.image_url}
                          alt={player.player.name}
                        />
                      </div>
                    </div>

                    <div className="my- flex flex-col w-full items-center">
                      <div className="flex flex-col mt-2">
                        <p className="text-lg font-medium">
                          {player.player.position}
                        </p>
                      </div>
                      <div className="py-1">
                        <img
                          className="w-12 h-12"
                          src={player.team.crest}
                          alt="player"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <p className="text-4xl">{player.player.name}</p>
                  <p>{player.player.shirtNumber || "9"}</p>
                  <p>Buteur</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
