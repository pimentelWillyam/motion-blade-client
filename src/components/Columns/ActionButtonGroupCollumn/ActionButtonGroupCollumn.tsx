import './ActionButtonGroupCollumn.css'

import { Col, Container, Row, Button } from "react-bootstrap";
import { FaArrowAltCircleUp, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import { GiCheckedShield, GiHealthIncrease, GiSwordman } from "react-icons/gi";
import { RiFootprintFill } from "react-icons/ri";
import { Servant } from '../../../types/Servant';
import { ServantIsInBattle } from '../../../helpers/servantHelpers/ServantIsInBattle';
import { Battle } from '../../../types/Battle';
import { HandleArrowClick } from '../../../handlers/HandleArrowClick';
import { SelectedAction } from '../../../types/SelectedAction';
import { FetchServantByName } from '../../../helpers/servantHelpers/FetchServantByName';
import { FetchBattleByName } from '../../../helpers/battleHelpers/FetchBattleByName';

export function ActionButtonGroupCollumn(props: {selectedServant: Servant | null, battle: Battle | null, selectedAction: SelectedAction | null, setSelectedAction: React.Dispatch<React.SetStateAction<"destacamento" | null>>}){
  if (props.selectedServant === null) return
  if (props.battle === null) return

  else if (!ServantIsInBattle.execute(props.selectedServant.name, props.battle ) && props.selectedAction !== 'destacamento') return(
    <Container id='servant-insertion-button-container'>
      <Button onClick={() => props.setSelectedAction('destacamento')}>Inserir servo na batalha</Button>
    </Container>
  )
  else if (props.selectedAction === 'destacamento')
     return(
    <Container id='servant-insertion-paragraph-container'>
      <p>Escolha o quadrante onde planeja destacar o seu servo </p>
    </Container>
  )
  else return(
    <Container id="action-button-group-collum">
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <GiSwordman size={'5em'} />
          <GiHealthIncrease size={'5em'} />
        </Col>
        <Col className="d-flex justify-content-center">
          <GiCheckedShield size={'5em'} />
          <RiFootprintFill size={'5em'} />
        </Col>
      </Row>
      <Row className="second-row">
        <Col className="d-flex justify-content-center">
          <FaArrowAltCircleUp onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string), 'up')} size={'5em'} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <FaArrowAltCircleLeft onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'left')}  size={'5em'} />
        </Col>
        <Col className="d-flex justify-content-center">
          <FaArrowAltCircleRight onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'right')}  size={'5em'} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <FaArrowAltCircleDown onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'down')}  size={'5em'} />
        </Col>
      </Row>
    </Container>
  );
}
