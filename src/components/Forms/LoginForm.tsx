import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { handleLoginSubmission } from '../../handlers/handleLoginSubmission';
import SubmitLoginButton from '../Buttons/SubmitLoginButton';
import RegisterNewUserButton from '../Buttons/RegisterNewUserButton';
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = styled.div`
  padding-top: 30%;
  padding-left: 30%;
  padding-right: 30%;
`;

const StyledSubmitButton = styled.div`
  float: right;
`;

function LoginForm(props: { setShowLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setLoginErrorModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearForm = () => { setUsername(''); setPassword(''); };

  const navigate = useNavigate();

  return (
    <LoginFormContainer>
      <Form onSubmit={event => void handleLoginSubmission(event, username, password, clearForm, props.setShowLoadingModal, props.setLoginErrorModal, navigate)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Insira seu nome de usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
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
        <RegisterNewUserButton />
        <StyledSubmitButton>
          <SubmitLoginButton />
        </StyledSubmitButton>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
