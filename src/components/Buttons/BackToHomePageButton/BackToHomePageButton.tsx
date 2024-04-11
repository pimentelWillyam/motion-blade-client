import Button from 'react-bootstrap/Button'
import './BackToHomePageButton.css'

function BackToHomePageButton() {
  return (
    <Button href='/home' id = "back-to-home-page-button" variant="warning" type="submit"> Voltar </Button>
      
  )
}

export default BackToHomePageButton