import Button from 'react-bootstrap/Button'
import './DeleteServantButton.css'

function DeleteServantButton(props: {onClick?: () => void}) {
  return (
    <Button onClick={props.onClick} id = "back-to-login-page-button" variant="danger" type="button"> Deletar </Button>
      
  )
}

export default DeleteServantButton