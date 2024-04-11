import './RegisterNewBattleForm.css'

import Form from 'react-bootstrap/Form'
import { handleRegisterSubmission } from '../../../handlers/handleRegisterSubmission';
import BackToLoginPageButton from '../../Buttons/BackToLoginPageButton/BackToLoginPageButton';
import SubmitRegisterButton from '../../Buttons/SubmitRegisterButton/SubmitRegisterButton';

function RegisterNewUserForm() {
  return (
    <div id="register-new-battle-form">
      <Form onSubmit={void handleRegisterSubmission()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Insira o nome da batalha" />
        </Form.Group>
        <Form.Select >
          <option>Selecione a quantidade máxima de Mestres nessa batalha</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
          <option >5</option>
          <option >6</option>
          <option >7</option>
          <option >8</option>
          <option >9</option>
          <option >10</option>
        </Form.Select>
        <br />
        <Form.Select >
          <option>Selecione a quantidade máxima de Servos nessa batalha</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
          <option >5</option>
          <option >6</option>
          <option >7</option>
          <option >8</option>
          <option >9</option>
          <option >10</option>
        </Form.Select>
        <br />
        <br />
       <BackToLoginPageButton /> <SubmitRegisterButton />
    </Form>
    </div>
    
  )
}

export default RegisterNewUserForm;