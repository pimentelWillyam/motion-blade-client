import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function BackToLoginPageButton() {
    const navigate = useNavigate()
  return (
    <Button onClick={() => navigate('/')}  variant="warning" type="submit"> Voltar </Button>
      
  )
}

export default BackToLoginPageButton