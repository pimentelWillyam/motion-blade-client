import './RegisterNewUserForm.css'

import Form from 'react-bootstrap/Form'
import { handleRegisterSubmission } from '../../../handlers/handleRegisterSubmission';
import BackToLoginPageButton from '../../Buttons/BackToLoginPageButton';
import SubmitRegisterButton from '../../Buttons/SubmitRegisterButton';

function RegisterNewUserForm() {
  return (
    <div id="register-new-user-form">
      <Form onSubmit={void handleRegisterSubmission()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Insira seu usuário" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Insira seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Insira sua senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Repita a sua senha" />
        </Form.Group>
       <BackToLoginPageButton /> <SubmitRegisterButton />
    </Form>
    </div>
    
  )
}

export default RegisterNewUserForm;