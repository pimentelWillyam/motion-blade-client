import styled from 'styled-components';
import { Container, Button } from "react-bootstrap";
import { FaArrowAltCircleUp, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import { GiCheckedShield, GiHealthIncrease, GiMailedFist } from "react-icons/gi";
import { Servant } from '../../types/Servant';
import { ServantIsInBattle } from '../../helpers/servantHelpers/ServantIsInBattle';
import { Battle } from '../../types/Battle';
import { HandleArrowClick } from '../../handlers/HandleArrowClick';
import { SelectedAction } from '../../types/SelectedAction';
import { FetchServantByName } from '../../helpers/servantHelpers/FetchServantByName';
import { FetchBattleByName } from '../../helpers/battleHelpers/FetchBattleByName';
import { TiUserDelete } from 'react-icons/ti';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const ActionButtonGroup = styled(Container)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding-left: 20px;
`;

export function ActionButtonGroupCollumn(props: { selectedServant: Servant | null, battle: Battle | null, selectedAction: SelectedAction | null, setSelectedAction: React.Dispatch<React.SetStateAction<"destacamento" | null>> }) {
  if (props.selectedServant === null || props.battle === null) return null;

  if (!ServantIsInBattle.execute(props.selectedServant.name, props.battle) && props.selectedAction !== 'destacamento') {
    return (
      <StyledContainer>
        <Button onClick={() => props.setSelectedAction('destacamento')}>Inserir servo na batalha</Button>
      </StyledContainer>
    );
  }

  if (props.selectedAction === 'destacamento') {
    return (
      <StyledContainer>
        <p>Escolha o quadrante onde planeja destacar o seu servo</p>
      </StyledContainer>
    );
  }

  return (
    <ActionButtonGroup>
      <ButtonRow>
      <GiCheckedShield size={'5em'} />
      <GiMailedFist size={'5em'}/>
        <GiHealthIncrease size={'5em'} />
        <TiUserDelete size={'5em'} />
      </ButtonRow>
      <DPadContainer>
        <div></div>
        <FaArrowAltCircleUp onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string), 'up')} size={'5em'} />
        <div></div>
        <FaArrowAltCircleLeft onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'left')} size={'5em'} />
        <div></div>
        <FaArrowAltCircleRight onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'right')} size={'5em'} />
        <div></div>
        <FaArrowAltCircleDown onClick={async () => HandleArrowClick.execute(await FetchServantByName.execute(props.selectedServant?.name as string), await FetchBattleByName.execute(props.battle?.name as string) as Battle, 'down')} size={'5em'} />
        <div></div>
      </DPadContainer>
    </ActionButtonGroup>
  );
}