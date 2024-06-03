import { createBrowserRouter } from "react-router-dom";

import ProtectedGameRoute from "./components/ProtectedGameRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ResultPage from "./pages/ResultPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/game",
    element: (
      <ProtectedRoute>
        <ProtectedGameRoute>
          <GamePage />
        </ProtectedGameRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/game/results",
    element: (
      <ProtectedRoute>
        <ProtectedGameRoute>
          <ResultPage />
        </ProtectedGameRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/leaderboard",
    element: (
      <ProtectedRoute>
        <LeaderboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

export { browserRouter };
