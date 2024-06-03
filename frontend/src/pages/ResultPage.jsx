import { Link, useLocation, useNavigate } from "react-router-dom";

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

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state.data;

  function handleClick() {
    navigate("/game", {
      replace: true,
      state: { continent: data.continent },
    });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="rounded-md bg-white p-12 shadow-md">
        <h1 className="block text-2xl font-bold">Summary</h1>
        <div className="mt-10">
          <div>
            <p className="block text-sm font-medium">Continent</p>
            <h1 className="mt-2 block text-2xl font-semibold text-blue-600">
              {data.continent.name}
            </h1>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="w-full">
              <p className="block text-sm font-medium">Time finished</p>
              <h1 className="mt-2 block text-2xl font-semibold text-blue-600">
                {secondsToHMS(data.time)}
              </h1>
            </div>
            <div className="w-full">
              <p className="block text-sm font-medium">Accuracy</p>
              <h1 className="mt-2 block text-2xl font-semibold text-blue-600">
                {data.accuracy}%
              </h1>
            </div>
          </div>
          <div className="mt-6 w-full">
            <p className="block text-sm font-medium">Score</p>
            <h1 className="mt-2 block text-2xl font-semibold text-blue-600">
              {data.score}
            </h1>
          </div>
        </div>
        <div className="mt-24">
          <button
            className="w-96 rounded-md bg-blue-600 p-2 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800"
            onClick={handleClick}
          >
            Retry
          </button>
          <div className="mt-6 flex justify-between gap-x-8">
            <Link to="/leaderboard" replace className="w-full">
              <button className="w-full rounded-md bg-blue-600 p-2 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800">
                Leaderboard
              </button>
            </Link>
            <Link to="/" replace className="w-full">
              <button className="w-full rounded-md bg-blue-600 p-2 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
