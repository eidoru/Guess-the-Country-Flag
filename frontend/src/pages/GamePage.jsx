import axios from "axios";

import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import Stopwatch from "../components/Stopwatch";

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function calculateScore(accuracy, time) {
  const weightedAccuracy = accuracy * 100;
  const weightedTime = time / 60;
  const score = Math.floor(weightedAccuracy - weightedTime);
  return score > 0 ? score : 0;
}

function GamePage() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [correctClicks, setCorrectClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const { user } = useAuth();

  const timeRef = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  const continent = location.state.continent;

  function handleTimeRef(time) {
    timeRef.current = time;
  }

  useEffect(() => {
    setCountries(shuffle(continent.countries));
  }, [continent.countries]);

  useEffect(() => {
    if (countries.length > 0) {
      setCurrentCountry(
        countries[Math.floor(Math.random() * countries.length)],
      );
    }
  }, [countries]);

  function handleClick(country) {
    if (countries.length <= 1) {
      setCurrentCountry(null);
      if (user) {
        const formData = {
          user: user,
          continent: continent.name,
          score: calculateScore(accuracy / 100, timeRef.current),
          time: timeRef.current,
          accuracy: accuracy,
        };
        console.log(formData);
        axios
          .post("http://localhost:8080/api/scores", formData)
          .then((response) => {
            console.log(response.data);
          });
      }
      navigate("/game/results", {
        state: {
          data: {
            accuracy: ((correctClicks / totalClicks) * 100).toFixed(2),
            time: timeRef.current,
            score: calculateScore(accuracy / 100, timeRef.current),
            continent: continent,
          },
        },
      });
    }
    setTotalClicks(totalClicks + 1);
    setCountries(countries.filter((c) => c.name !== country.name));
    if (country.name === currentCountry.name) {
      setCorrectClicks(correctClicks + 1);
    }
  }

  const accuracy =
    totalClicks > 0 ? ((correctClicks / totalClicks) * 100).toFixed(2) : 0;

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="absolute right-10 top-10 flex gap-x-6">
        <button
          onClick={() => {
            setCountries(shuffle(countries));
          }}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Shuffle
        </button>
        <button
          onClick={() => {
            navigate(0);
          }}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Retry
        </button>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Quit
        </button>
      </div>
      <div>
        <Stopwatch
          handleTimeRef={handleTimeRef}
          className="text-center text-2xl font-semibold"
        />
        <h1 className="text-center text-[40px] font-bold text-blue-600">
          {currentCountry && currentCountry.name}
        </h1>
        <p className="text-center text-2xl font-semibold">
          <span className="text-blue-600">{accuracy}%</span> Accuracy
        </p>
      </div>
      <div>
        <div className="grid grid-cols-8 grid-rows-8 gap-2 overflow-auto rounded-md bg-gray-50 p-12 shadow-md">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center rounded-md p-1 transition hover:ring-2 hover:ring-blue-600`}
              onClick={() => {
                handleClick(country);
              }}
            >
              <div
                className={`absolute h-full w-full opacity-50 hover:bg-blue-600`}
              ></div>
              <img
                src={`/flags/${country.code}.png`}
                className="h-[56px] w-[84px] rounded-md ring-1 ring-gray-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
