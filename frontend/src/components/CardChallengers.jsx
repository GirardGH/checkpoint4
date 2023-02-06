/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormUpdate from "./FormUpdate";

import "./Card.css";
import ButtonDelete from "./ButtonDelete";

export default function CardChallengers() {
  const [data, setData] = useState();
  const [showForm, setShowForm] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/players")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const showUpdateForm = (player) => {
    setSelectedPlayer(player);
    setShowForm(true);
  };

  const hideUpdateForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <FormUpdate
          player={selectedPlayer}
          data={data}
          hideUpdateForm={hideUpdateForm}
        />
      ) : null}
      {data &&
        data.map((player) => {
          return (
            <div className="flip" key={player.id_player}>
              <div className="content">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold text-lg text-white drop-shadow-2xl text-center">
                    {player.firstname} {player.lastname}
                  </h1>
                  <div className="front">
                    <p>{player.favorite_team}</p>
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-20 h-20">
                        <img
                          className="w-20 h-20 rounded-full my-1"
                          src={player.url_image}
                          alt={player.lastname}
                        />
                      </div>
                    </div>

                    <div className="my- flex flex-col w-full items-center">
                      <div className="flex flex-col mt-2">
                        <p className="text-lg font-medium">{player.position}</p>
                      </div>
                      <div className="py-1">
                        <img
                          className="w-20"
                          src={player.flag}
                          alt="Arthur HRTB"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <p className="text-4xl">{player.lastname}</p>
                  <p>{player.number}</p>
                  <br />
                  <p>{player.position}</p>
                </div>
              </div>
              <div className="flex my-3">
                <button
                  className="bg-blue-500 text-white p-2 rounded mx-2"
                  onClick={() => showUpdateForm(player)}
                  Modifier
                </button>
                <ButtonDelete
                  data={data}
                  setData={setData}
                  id={player.id_player}
                />
              </div>
            </div>
          );
        })}
    </>
  );
}
