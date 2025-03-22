import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import RegisterNewBattleForm from '../components/Forms/RegisterNewBattleForm';
import GenericSuccessToast from '../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../components/Toasts/GenericFailToast/GenericFailToast';
import LoadingModal from '../components/Modals/LoadingModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBars/NavigationBar';

const StyledContainer = styled(Container)`
  padding-top: 5vh;
  height: 100vh;
  width: 100vw;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10vw;
  height: 10vh;
`;

const RegisterNewBattlePage = () => {
  const navigate = useNavigate();
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);

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
      <LoadingModal show={showLoadingModal} />
      <GenericSuccessToast 
        show={showSuccessToast} 
        onClose={() => setShowSuccessToast(false)} 
        title='Sucesso!' 
        message='Batalha criada com sucesso' 
      />
      <GenericFailToast 
        show={showFailToast} 
        onClose={() => setShowFailToast(false)} 
        title='Erro!' 
        message='Não foi possível criar a batalha' 
      />
      <RegisterNewBattleForm 
        setIsLoadingModal={setShowLoadingModal} 
        setShowBattleRegisteredToast={setShowSuccessToast} 
        setShowBattleRegistryFailToast={setShowFailToast} 
      />
      <SecondRow />
    </StyledContainer>
  );
};

export { RegisterNewBattlePage };
