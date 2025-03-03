import './RegisterNewServantPage.css'


import Container from 'react-bootstrap/Container'
import RegisterNewServantForm from '../../components/Forms/RegisterNewServantForm/RegisterNewServantForm';
import GenericSuccessToast from '../../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../../components/Toasts/GenericFailToast/GenericFailToast';
import LoadingModal from '../../components/Modals/LoadingModal/LoadingModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';

const RegisterNewServantPage = () => {
  const navigate = useNavigate();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [showServantRegisteredToast, setShowServantRegisteredToast] = useState(false);
  const [showServantRegistryFailToast, setShowServantRegistryFailToast] = useState(false);

    useEffect(() => {
        const login = localStorage.getItem("login")
        const token = localStorage.getItem("token")
    
        if (!login && !token ) {
          navigate("/");
        }
      }, []);

  return (
    <Container id = 'register-user-page'>
      <Row className = "navigation-bar-row">
        <NavigationBar />
      </Row>
      <LoadingModal show={isLoadingModal}/>
      <GenericSuccessToast show={showServantRegisteredToast} onClose={() => setShowServantRegisteredToast(false)} title='Sucesso!' message='Servo criado com sucesso' />
      <GenericFailToast show={showServantRegistryFailToast} onClose={() => setShowServantRegistryFailToast(false)} title='Erro!' message='Não foi possível criar o servo'/>
      <RegisterNewServantForm setIsLoadingModal={setIsLoadingModal} setShowServantRegisteredToast={setShowServantRegisteredToast} setShowServantRegistryFailToast={setShowServantRegistryFailToast} />
    </Container>

        
      
  )
}

export { RegisterNewServantPage }