import { useState } from 'react';
import './RegisterNewBattleForm.css';
import Form from 'react-bootstrap/Form';
import SubmitRegisterButton from '../../Buttons/SubmitRegisterButton';
import BackToHomePageButton from '../../Buttons/BackToHomePageButton';
import { handleRegistryNewBattleFormSubmission } from '../../../handlers/handleRegistryNewBattleFormSubmission';

function RegisterNewBattleForm(props: {
  setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowBattleRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>
  setShowBattleRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [battleName, setBattleName] = useState('');
  const [maxMasters, setMaxMasters] = useState('');
  const [maxServants, setMaxServants] = useState('');

  const clearBattleForm = () => {
    setBattleName('');
    setMaxMasters('');
    setMaxServants('');
  };

  return (
    <div id="register-new-battle-form">
      <Form
        onSubmit={(event) =>
          handleRegistryNewBattleFormSubmission(
            event, battleName, clearBattleForm, props.setIsLoadingModal, props.setShowBattleRegisteredToast, props.setShowBattleRegistryFailToast
          )
        }
      >
        <Form.Group className="mb-3" controlId="battleName">
          <Form.Control
            type="text"
            placeholder="Insira o nome da batalha"
            value={battleName}
            onChange={(e) => setBattleName(e.target.value)}
          />
        </Form.Group>

        <Form.Select value={maxMasters} onChange={(e) => setMaxMasters(e.target.value)}>
          <option value="">Selecione a quantidade máxima de Mestres nessa batalha</option>
          {[...Array(9)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </Form.Select>
        <br />

        <Form.Select value={maxServants} onChange={(e) => setMaxServants(e.target.value)}>
          <option value="">Selecione a quantidade máxima de Servos nessa batalha</option>
          {[...Array(9)].map((_, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </Form.Select>
        <br />
        <br />

        <BackToHomePageButton /> <SubmitRegisterButton />
      </Form>
    </div>
  );
}

export default RegisterNewBattleForm;
