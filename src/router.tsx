import { createBrowserRouter } from "react-router-dom";
import { RegisterNewUserPage } from "./pages/RegisterNewUserPage";
import { RegisterNewServantPage } from "./pages/RegisterNewServantPage";
import { RegisterNewBattlePage } from "./pages/RegisterBattlePage";
import MyServantsPage from "./pages/MyServantsPage";
import {BattlePage} from "./pages/BattlePage";
import { ServantPage } from "./pages/ServantPage";
import BattlesPage from "./pages/BattlesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/cadastrar-usuario", element: <RegisterNewUserPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/cadastrar-servo", element: <RegisterNewServantPage /> },
  { path: "/meus-servos", element: <MyServantsPage /> },
  { path: "/servo/:name", element: <ServantPage /> },
  { path: "/cadastrar-batalha", element: <RegisterNewBattlePage /> },
  { path: "/batalhas", element: <BattlesPage /> },
  { path: "/batalha/:name", element: <BattlePage /> }
]);

export { router };
