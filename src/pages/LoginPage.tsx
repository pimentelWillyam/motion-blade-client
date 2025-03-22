import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import LoadingModal from '../components/Modals/LoadingModal';
import { Container } from 'react-bootstrap';
import LoginForm from '../components/Forms/LoginForm';
import GenericModal from '../components/Modals/GenericModal';

const LoginPage = () => {
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [loginErrorModal, setLoginErrorModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login")
    const token = localStorage.getItem("token")

    if (login && token ) {
      navigate("/home");
    }
  }, []);

  return (
    <LoginPageContainer>
      <LoadingModal show={isLoadingModal} />
      <GenericModal 
        title="Erro ao fazer login" 
        bodyText="Usuário ou senha inválidos" 
        show={loginErrorModal} 
        onHide={() => setLoginErrorModal(false)} 
      />
      <LoginForm setShowLoadingModal={setIsLoadingModal} setLoginErrorModal={setLoginErrorModal} />
    </LoginPageContainer>
  );
}

export default LoginPage;

const LoginPageContainer = styled(Container)`
  padding-top: 5vh;
  height: 100vh;
  width: 100vw;
`;
