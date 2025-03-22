import styled from 'styled-components';
import RegisterNewUserForm from '../components/Forms/RegisterNewUserForm';
import Container from 'react-bootstrap/Container';
import LoadingModal from '../components/Modals/LoadingModal';
import { useState } from 'react';
import UserRegisteredToast from '../components/Toasts/UserRegisteredToast/UserRegisteredToast';
import UserRegistryFailToast from '../components/Toasts/UserRegistryFailToast/UserRegistryFailToast';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)`
  padding-top: 5vh;
  height: 100vh;
  width: 100vw;
`;


const RegisterNewUserPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showUserRegisteredToast, setShowUserRegisteredToast] = useState(false);
  const [showUserRegistryFailToast, setShowUserRegistryFailToast] = useState(false);

  return (
    <StyledContainer>
      <LoadingModal show={isLoading} />
      <UserRegisteredToast show={showUserRegisteredToast} onClose={() => navigate('/')} />
      <UserRegistryFailToast 
        show={showUserRegistryFailToast} 
        onClose={() => setShowUserRegistryFailToast(false)} 
      />
      <RegisterNewUserForm 
        setIsLoadingModal={setIsLoading} 
        setShowUserRegisteredToast={setShowUserRegisteredToast} 
        setShowUserRegistryFailToast={setShowUserRegistryFailToast} 
      />
    </StyledContainer>
  );
};

export { RegisterNewUserPage };
