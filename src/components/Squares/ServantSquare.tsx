import { Container } from 'react-bootstrap'
import { Servant } from '../../types/Servant'
import './ServantSquare.css'

export function ServantSquare(props: { servantInfo: Servant, onClick: () => void}) {
  return (
    <div onClick={() => props.onClick()} id='servant-square'>
      {props.servantInfo.name}

    </div>
  )
}
