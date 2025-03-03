import './RegisterNewUserForm.css'

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { handleRegisterSubmission } from '../../../handlers/handleRegisterSubmission';
import BackToLoginPageButton from '../../Buttons/BackToLoginPageButton/BackToLoginPageButton';
import SubmitRegisterButton from '../../Buttons/SubmitRegisterButton/SubmitRegisterButton';

function RegisterNewUserForm(props: {setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>, }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const clearUserForm = () => {
    setUserName('');
    setPassword('');
    setRepeatedPassword('');
  }

  return (
    <div id="register-new-user-form">
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
       <BackToLoginPageButton /> <SubmitRegisterButton />
    </Form>
    </div>
  )
}

export default RegisterNewUserForm;