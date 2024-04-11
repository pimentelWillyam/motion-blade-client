import './LogoutButton.css'


import Button from 'react-bootstrap/Button';



import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../../handlers/handleLogout';

function LogoutButton() {
  const navigate = useNavigate()
  return (
    <Button id='logout-button' variant="danger" onClick={() => handleLogout(navigate)}>Sair</Button>
      
  )
}

export default LogoutButton