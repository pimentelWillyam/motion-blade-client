import './LoginForm.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { handleLoginSubmission } from '../../../handlers/handleLoginSubmission';

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
        <Button id = "submission-button" variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </div>
    
  )
}

export default LoginForm;