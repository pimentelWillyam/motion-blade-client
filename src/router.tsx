import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { RegisterNewUserPage } from "./pages/RegisterNewUserPage/RegisterNewUserPage";
import { RegisterNewServantPage } from "./pages/RegisterServantPage/RegisterNewServantPage";
import { RegisterNewBattlePage } from "./pages/RegisterBattlePage/RegisterBattlePage";
import MyServantsPage from "./pages/MyServantsPage/MyServantsPage";

const router = createBrowserRouter([
  {path: '/', element: <LoginPage/>},
  {path: '/cadastrar-usuario', element: <RegisterNewUserPage/>},
  {path: '/home', element: <HomePage/>},
  {path: '/cadastrar-servo', element: <RegisterNewServantPage/>},
  {path: '/meus-servos', element: <MyServantsPage/>},
  {path: '/cadastrar-batalha', element: <RegisterNewBattlePage/>},
  {path: '/batalhas', element: <HomePage/>},




])

export { router }

