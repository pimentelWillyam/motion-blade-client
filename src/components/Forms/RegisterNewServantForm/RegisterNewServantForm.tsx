import './RegisterNewServantForm.css'

import Form from 'react-bootstrap/Form'
import { handleRegisterSubmission } from '../../../handlers/handleRegisterSubmission';
import SubmitServantRegistryButton from '../../Buttons/SubmitServantRegistryButton/SubmitServantRegistryButton';
import BackToHomePageButton from '../../Buttons/BackToHomePageButton/BackToHomePageButton';

function RegisterNewUserForm() {
  return (
    <div id="register-new-servant-form">
      <Form onSubmit={void handleRegisterSubmission()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Insira o nome do servo" />
        </Form.Group>
        <Form.Select >
          <option>Selecione o sexo do seu servo</option>
          <option >Masculino</option>
          <option >Feminino</option>
        </Form.Select>
        <br />
        <Form.Select >
          <option>Selecione a profissão do pai de seu servo</option>
          <option >PJES</option>
        </Form.Select>
        <br />
        <Form.Select >
          <option>Selecione a profissão do seu servo</option>
          <option >PJES</option>
        </Form.Select>
        <br />
       <BackToHomePageButton /> <SubmitServantRegistryButton />
    </Form>
    </div>
    
  )
}

export default RegisterNewUserForm;