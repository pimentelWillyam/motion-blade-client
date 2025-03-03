import Button from 'react-bootstrap/Button'
import './RegisterNewUserButton.css'
import { useNavigate } from 'react-router-dom'

function RegisterNewUserButton() {

  const navigate = useNavigate()
  return (
    <Button onClick = {() => navigate('/cadastrar-usuario')} variant='success'>Cadastrar</Button>
      
  )
}

export default RegisterNewUserButton