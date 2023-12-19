import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import Randomizer from "./Randomizer";
import Remote from "./Remote";
import Winners from "./Winners";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Randomizer />,
    },
    {
      path: "/remote",
      element: <Remote />,
    },
    {
      path: "/winners",
      element: <Winners />,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
