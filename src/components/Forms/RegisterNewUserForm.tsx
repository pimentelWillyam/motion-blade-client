import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { handleRegisterSubmission } from '../../handlers/handleRegisterSubmission';
import BackToLoginPageButton from '../Buttons/BackToLoginPageButton';
import SubmitRegisterButton from '../Buttons/SubmitRegisterButton';
import { Col, Row } from 'react-bootstrap';

function RegisterNewUserForm(props: {setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>, }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const clearUserForm = () => {
    setUserName('');
    setPassword('');
    setRepeatedPassword('');
  };

  return (
    <FormContainer>
      <FirstRow>
        <Form onSubmit={event => void handleRegisterSubmission(event, userName, password, repeatedPassword, clearUserForm, props.setIsLoadingModal, props.setShowUserRegisteredToast, props.setShowUserRegistryFailToast)}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Control 
            type="text" 
            placeholder="Insira seu usuário" 
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
            type="password" 
            placeholder="Insira sua senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatedPassword">
          <Form.Control 
            type="password" 
            placeholder="Repita a sua senha" 
            value={repeatedPassword}
            onChange={e => setRepeatedPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      </FirstRow>
      <SecondRow>
        <SecondRowFirstColumn>
          <BackToLoginPageButton />

        </SecondRowFirstColumn>
        <SecondRowSecondColumn>
          <SubmitButton />
        </SecondRowSecondColumn>
      </SecondRow>


    </FormContainer>
  );
}

const FirstRow = styled(Row)``

const SecondRow = styled(Row)``

const SecondRowFirstColumn = styled(Col)``

const SecondRowSecondColumn = styled(Col)`
  display: flex;
  justify-content: flex-end;`



const FormContainer = styled.div`
  padding-top: 30%;
  padding-left: 30%;
  padding-right: 30%;
`;

const SubmitButton = styled(SubmitRegisterButton)`
`;

export default RegisterNewUserForm;
