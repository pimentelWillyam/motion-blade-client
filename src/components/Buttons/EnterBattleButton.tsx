import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
function EnterBattleButton(props: {nomeBatalha: string}) {
  const navigate = useNavigate()
  return (
    <Button id = "enter-battle-button" variant="success" type="button" onClick={() => navigate(`/batalha/${props.nomeBatalha}`)}> Junta-se a batalha </Button>
      
  )
}

export default EnterBattleButton