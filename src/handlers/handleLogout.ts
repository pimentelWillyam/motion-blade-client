import { NavigateFunction } from "react-router-dom";


const handleLogout = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate('/')





}

export {handleLogout}