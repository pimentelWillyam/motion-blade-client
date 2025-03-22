import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import RegisterNewServantForm from '../components/Forms/RegisterNewServantForm';
import GenericSuccessToast from '../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../components/Toasts/GenericFailToast/GenericFailToast';
import LoadingModal from '../components/Modals/LoadingModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBars/NavigationBar';

const StyledContainer = styled(Container)`
  padding-top: 1vh;
  height: 100vh;
  width: 100vw;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10vw;
  height: 10vh;
`;

const RegisterNewServantPage = () => {
  const navigate = useNavigate();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [showServantRegisteredToast, setShowServantRegisteredToast] = useState(false);
  const [showServantRegistryFailToast, setShowServantRegistryFailToast] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login && !token) {
      navigate("/");
    }
  }, []);

  return (
    <StyledContainer>
      <Row className="navigation-bar-row">
        <NavigationBar />
      </Row>
      <LoadingModal show={isLoadingModal} />
      <GenericSuccessToast 
        show={showServantRegisteredToast} 
        onClose={() => setShowServantRegisteredToast(false)} 
        title='Sucesso!' 
        message='Servo criado com sucesso' 
      />
      <GenericFailToast 
        show={showServantRegistryFailToast} 
        onClose={() => setShowServantRegistryFailToast(false)} 
        title='Erro!' 
        message='Não foi possível criar o servo' 
      />
      <RegisterNewServantForm 
        setIsLoadingModal={setIsLoadingModal} 
        setShowServantRegisteredToast={setShowServantRegisteredToast} 
        setShowServantRegistryFailToast={setShowServantRegistryFailToast} 
      />
      <SecondRow />
    </StyledContainer>
  );
};

export { RegisterNewServantPage };