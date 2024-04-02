import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { registerNewUser } from './pages/RegisterNewUser/RegisterNewUser';

import { BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Login/>}/>
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "/register-new-user" element = {<registerNewUser/>}/>

            </Routes>
        </BrowserRouter>
    )
}