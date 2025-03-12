import './RegisterNewUserPage.css'


import RegisterNewUserForm from '../../components/Forms/RegisterNewUserForm/RegisterNewUserForm';
import Container from 'react-bootstrap/Container'
import LoadingModal from '../../components/Modals/LoadingModal/LoadingModal';
import { useEffect, useState } from 'react';
import UserRegisteredToast from '../../components/Toasts/UserRegisteredToast/UserRegisteredToast';
import UserRegistryFailToast from '../../components/Toasts/UserRegistryFailToast/UserRegistryFailToast';
import { useNavigate } from 'react-router-dom';

const RegisterNewUserPage = () => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showUserRegisteredToast, setShowUserRegisteredToast] = useState(false);
  const [showUserRegistryFailToast, setShowUserRegistryFailToast] = useState(false);

  return (
    <Container id = 'register-user-page'>
      <LoadingModal show={isLoading}/>
      <UserRegisteredToast show={showUserRegisteredToast} onClose={() => navigate('/')} />
      <UserRegistryFailToast show={showUserRegistryFailToast} onClose={() => {setShowUserRegistryFailToast(false)} } />
      <RegisterNewUserForm setIsLoadingModal={setIsLoading} setShowUserRegisteredToast={setShowUserRegisteredToast} setShowUserRegistryFailToast={setShowUserRegistryFailToast} />
    </Container>

        
      
  )
}

export { RegisterNewUserPage }