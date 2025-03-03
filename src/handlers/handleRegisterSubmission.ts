import axios from 'axios';

const handleRegisterSubmission = async (event: React.FormEvent<HTMLFormElement>, userName: string, password: string, repeatedPassword: string, clearUserForm: () => void, setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowUserRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>) => {
  event.preventDefault();
  const data = {
    login: userName,
    password: password,
  };
  try {
    setIsLoadingModal(true)
    clearUserForm()
    const response = await axios.post('http://localhost:4000/api/user', data);
    if (response.status === 200) {
      setIsLoadingModal(false)
      setShowUserRegisteredToast(true)
    }
    else {
      setIsLoadingModal(false)
      setShowUserRegistryFailToast(true)
    }
  }catch (error) {
    console.error('Error during registration:', error);
    setIsLoadingModal(false)
    setShowUserRegistryFailToast(true)
  }
}

export { handleRegisterSubmission };