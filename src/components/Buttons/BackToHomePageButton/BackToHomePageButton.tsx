import Button from 'react-bootstrap/Button'
import './BackToHomePageButton.css'
import { useNavigate } from 'react-router-dom'

function BackToHomePageButton() {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate('/home')} id = "back-to-home-page-button" variant="warning" type="submit"> Voltar </Button>
      
  )
}

export default BackToHomePageButton