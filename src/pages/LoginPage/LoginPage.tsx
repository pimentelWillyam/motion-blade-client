import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import Container from 'react-bootstrap/Container';
import LoadingModal from '../../components/Modals/LoadingModal/LoadingModal';
import GenericModal from '../../components/Modals/GenericModal/GenericModal';
import { useState } from 'react';

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
    <Container id="login-page">
      <LoadingModal show={isLoadingModal} />
      <GenericModal 
        title="Erro ao fazer login" 
        bodyText="Usuário ou senha inválidos" 
        show={loginErrorModal} 
        onHide={() => setLoginErrorModal(false)} 
      />
      <LoginForm setShowLoadingModal={setIsLoadingModal} setLoginErrorModal={setLoginErrorModal} />
    </Container>
  );
}

export default LoginPage;
