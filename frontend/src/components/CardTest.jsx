import React from "react";
import "./Card.css";

function CardTest() {
  return (
    <div>
      <div className="flip">
        <div className="content">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg text-white drop-shadow-2xl text-center">
              MBAPPE
            </h1>
            <div className="front">
              <p>Paris-Saint-Germain</p>
              <div className="w-full flex justify-center">
                <div className="mt-1 w-20 h-20">
                  <img
                    className="w-20 h-20 rounded-full my-1"
                    src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1675264107/image_3374.jpg"
                    alt="Arthur HRTB"
                  />
                </div>
              </div>

              <div className="my- flex flex-col w-full items-center">
                <div className="flex flex-col mt-2">
                  <p className="text-lg font-medium">Attaquant </p>
                </div>
                <div className="py-1">
                  <img
                    className="w-20"
                    src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1675333658/t%C3%A9l%C3%A9chargement_5_whmmjx.png"
                    alt="Arthur HRTB"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <p className="text-4xl">MBAPPE</p>
            <p>9</p>
            <br />
            <p>Buteur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTest;
