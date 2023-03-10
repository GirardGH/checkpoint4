/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormCreate() {
  const [playerInfo, setPlayerInfo] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    position: "",
    number: "",
    url_image: "",
    favorite_team: "",
    id_country: "",
  });

  const [countriesData, setCountriesData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/countries/all")
      .then((response) => {
        setCountriesData(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/players/", playerInfo)
      .then((res) => {
        setPlayerInfo({
          firstname: "",
          lastname: "",
          dob: "",
          position: "",
          number: "",
          url_image: "",
          favorite_team: "",
          id_country: "",
        });
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      className="space-y-8 divide-y divide-gray-200 pb-8 px-4"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Saisissez vos informations
            </p>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Vos informations
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Pr??nom{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.firstname}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, firstname: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Nom{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.lastname}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, lastname: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Position{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.position}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, position: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Pays{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.id_country}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, id_country: e.target.value })
                  }
                >
                  {countriesData &&
                    countriesData.map((country) => (
                      <option
                        key={country.id_country}
                        value={country.id_country}
                      >
                        <div className="flex ">
                          <p>{country.name}</p>
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="h-5 w-5"
                          />
                        </div>
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Lien photo{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.url_image}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, url_image: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Num??ro maillot{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.number}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, number: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                ??quipe favorite{" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.favorite_team}
                  onChange={(e) =>
                    setPlayerInfo({
                      ...playerInfo,
                      favorite_team: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Anniversaire (YYYY-MM-JJ){" "}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={playerInfo.dob}
                  onChange={(e) =>
                    setPlayerInfo({ ...playerInfo, dob: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCreate;
