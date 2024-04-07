import './LoginForm.css'

import Form from 'react-bootstrap/Form'
import { handleLoginSubmission } from '../../../handlers/handleLoginSubmission';
import SubmitLoginButton from '../../Buttons/SubmitLoginButton/SubmitLoginButton';
import RegisterNewUserButton from '../../Buttons/RegisterNewUserButton/RegisterNewUserButton';

function LoginForm() {
  return (
    <div id="login-form">
      <Form onSubmit={void handleLoginSubmission()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Insira seu nome de usuário" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Insira sua senha" />
        </Form.Group>
        <RegisterNewUserButton /> <SubmitLoginButton />
        
    </Form>
    </div>
    
  )
}

export default LoginForm;