import axios from "axios";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { continents } from "../data/continents";

function LeaderboardPage() {
  const [selectedContinent, setSelectedContinent] = useState(continents[0]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/scores", {
        params: { continent: selectedContinent.name },
      })
      .then((response) => {
        setScores(response.data.iterable);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedContinent]);

  function secondsToHMS(seconds) {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="rounded-md bg-white p-12 shadow-md">
        <div className="flex items-center gap-20">
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <div className="flex w-full items-center gap-x-6">
            <label htmlFor="continent" className="text-sm font-medium">
              Continent
            </label>
            <Listbox value={selectedContinent} onChange={setSelectedContinent}>
              <ListboxButton className="relative w-96 cursor-default rounded-md p-2 text-left text-sm ring-1 ring-inset ring-gray-300">
                {selectedContinent.name}
                <ChevronDownIcon
                  className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
                  aria-hidden="true"
                />
              </ListboxButton>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  anchor="bottom"
                  className="mt-2 w-[var(--button-width)] rounded-md bg-white py-2 text-left text-sm shadow-md ring-1 ring-gray-300"
                >
                  {continents.map((continent, index) => (
                    <ListboxOption
                      key={index}
                      value={continent}
                      className="cursor-default select-none p-2 data-[focus]:bg-blue-600 data-[focus]:text-white"
                    >
                      {continent.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>
        </div>
        <table className="mt-6 w-full overflow-hidden rounded-md text-sm ring-1 ring-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left font-semibold">Rank</th>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Accuracy</th>
              <th className="p-3 text-left font-semibold">Time finished</th>
              <th className="p-3 text-left font-semibold">Score</th>
            </tr>
          </thead>
          <tbody className="border-gray-300">
            {scores
              .filter((score) => score.continent === selectedContinent.name)
              .sort((a, b) => b.score - a.score)
              .map((score, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 text-left font-semibold">{index + 1}</td>
                  <td className="p-3 text-left">{`${score.user.first_name} ${score.user.last_name}`}</td>
                  <td className="p-3 text-left">{score.accuracy}%</td>
                  <td className="p-3 text-left">{secondsToHMS(score.time)}</td>
                  <td className="p-3 text-left">{score.score}</td>
                </tr>
              ))}
            {Array.from({ length: 10 - scores.length }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 text-left font-semibold text-gray-300">
                  {scores.length + index + 1}
                </td>
                <td className="p-3 text-left text-gray-300">-</td>
                <td className="p-3 text-left text-gray-300">-</td>
                <td className="p-3 text-left text-gray-300">-</td>
                <td className="p-3 text-left text-gray-300">-</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <Link to="/">
            <button className="mt-6 w-24 rounded-md bg-blue-600 p-2 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
