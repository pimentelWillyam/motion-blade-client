import styled from 'styled-components';
import { Servant } from "../../types/Servant";
import { useEffect } from "react";

const CenteredContainer = styled.div`
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;`;

export function SelectedServantColumn(props: { selectedServant: Servant | null }) {
  useEffect(() => {
    console.log('renderizou!');
  }, [props.selectedServant]);

  if (props.selectedServant === null) return null;

  return (
    <CenteredContainer>
      <p>Nome: {props.selectedServant.name}</p>
      <p>pontos de vida: {'falta implementar'}</p>
      <p>pontos de movimento: {'falta implementar'}</p>
      <p>pontos de guarda: {'falta implementar'}</p>
      <p>agilidade: {props.selectedServant.currentAttributes.agility}</p>
      <p>técnica: {props.selectedServant.currentAttributes.technique}</p>
      <p>força: {props.selectedServant.currentAttributes.strength}</p>
      <p>fortitude: {props.selectedServant.currentAttributes.strength}</p>
      <p>arma primária: {props.selectedServant.inventory.primaryWeapon.type}</p>
      <p>arma secundária: {props.selectedServant.inventory.secondaryWeapon?.type}</p>
      <p>armadura primária: {props.selectedServant.inventory.primaryArmor.type}</p>
      <p>armadura secundária: {props.selectedServant.inventory.secondaryArmor.type}</p>
      <p>armadura: {props.selectedServant.inventory.secondaryArmor.type}</p>
      <p></p>
      <p>eixo x: {props.selectedServant.battleInfo.horizontalPosition}</p>
      <p>eixo y: {props.selectedServant.battleInfo.verticalPosition}</p>

    </CenteredContainer>
  );
}
