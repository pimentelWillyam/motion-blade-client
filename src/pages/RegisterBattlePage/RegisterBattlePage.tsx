import { useEffect, useState } from 'react';
import './RegisterBattlePage.css';

import Container from 'react-bootstrap/Container';
import RegisterNewBattleForm from '../../components/Forms/RegisterNewBattleForm/RegisterNewBattleForm';
import LoadingModal from '../../components/Modals/LoadingModal/LoadingModal';
import GenericSuccessToast from '../../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../../components/Toasts/GenericFailToast/GenericFailToast';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';

const RegisterNewBattlePage = () => {

  const navigate = useNavigate();
  
    useEffect(() => {
        const login = localStorage.getItem("login")
        const token = localStorage.getItem("token")
    
        if (!login && !token ) {
          navigate("/");
        }
      }, []);

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);

  return (
    <Container id="register-user-page">
      <LoadingModal show={showLoadingModal} />

      <GenericSuccessToast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} />
      <GenericFailToast show={showFailToast} onClose={() => setShowFailToast(false)} />
      <Row className = "navigation-bar-row">
        <NavigationBar />
      </Row>
      <RegisterNewBattleForm
        setIsLoadingModal={setShowLoadingModal}
        setShowBattleRegisteredToast={setShowSuccessToast}
        setShowBattleRegistryFailToast={setShowFailToast}
      />
    </Container>
  );
};

export { RegisterNewBattlePage };
