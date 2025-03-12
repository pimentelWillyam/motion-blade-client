import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { RegisterNewUserPage } from "./pages/RegisterNewUserPage/RegisterNewUserPage";
import { RegisterNewServantPage } from "./pages/RegisterServantPage/RegisterNewServantPage";
import { RegisterNewBattlePage } from "./pages/RegisterBattlePage/RegisterBattlePage";
import MyServantsPage from "./pages/MyServantsPage/MyServantsPage";
import BattlesPage from "./pages/BattlesPage/BattlesPage";
import {BattlePage} from "./pages/BattlePage/BattlePage";
import { ServantPage } from "./pages/ServantPage/ServantPage";

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
