import './RegisterNewServantForm.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { handleRegistryNewServantFormSubmission } from '../../../handlers/handleRegistryNewServantFormSubmission';
import SubmitServantRegistryButton from '../../Buttons/SubmitServantRegistryButton/SubmitServantRegistryButton';
import BackToHomePageButton from '../../Buttons/BackToHomePageButton/BackToHomePageButton';
import { professions } from '../../../constants/professions';

function RegisterNewServantForm(props: {setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowServantRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowServantRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>, }) {
  const [servantName, setServantName] = useState('');
  const [servantSex, setServantSex] = useState('');
  const [fatherProfession, setFatherProfession] = useState('');
  const [servantProfession, setServantProfession] = useState('');

  const clearServantForm = () => {
    setServantName('');
    setServantSex('');
    setFatherProfession('');
    setServantProfession('');
  };

  return (
    <div id="register-new-servant-form">
      <Form onSubmit={event => handleRegistryNewServantFormSubmission(event, servantName, servantSex, fatherProfession, servantProfession, clearServantForm, props.setIsLoadingModal, props.setShowServantRegisteredToast, props.setShowServantRegistryFailToast)}>
        <Form.Group className="mb-3" controlId="formServantName">
          <Form.Control
            type="text"
            placeholder="Insira o nome do servo"
            value={servantName}
            onChange={(e) => setServantName(e.target.value)}
          />
        </Form.Group>

        <Form.Select value={servantSex} onChange={(e) => setServantSex(e.target.value)}>
          <option value="">Selecione o sexo do seu servo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </Form.Select>
        <br />

        <Form.Select value={fatherProfession} onChange={(e) => setFatherProfession(e.target.value)}>
          <option value="">Selecione a profissão do pai de seu servo</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>{profession}</option>
          ))}
        </Form.Select>
        <br />

        <Form.Select value={servantProfession} onChange={(e) => setServantProfession(e.target.value)}>
          <option value="">Selecione a profissão do seu servo</option>
          {professions.map((profession) => (
            <option key={profession} value={profession}>{profession}</option>
          ))}
        </Form.Select>
        <br />

        <BackToHomePageButton /> 
        <SubmitServantRegistryButton />
      </Form>
    </div>
  );
}

export default RegisterNewServantForm;
