import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function VisualizeServantDetailsButton(props: {servantName: string}) {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate(`/servo/${props.servantName}`)} id = "back-to-login-page-button" variant="primary" type="submit"> Detalhes </Button>
      
  )
}

export default VisualizeServantDetailsButton