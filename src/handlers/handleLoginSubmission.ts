import axios from "axios";

const handleLoginSubmission = async  (event: React.FormEvent<HTMLFormElement>, userName: string, password: string, clearLoginForm: () => void,  setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setLoginErrorModal: React.Dispatch<React.SetStateAction<boolean>>, navigate: NavigateFunction) => {
  event.preventDefault();
  const data = {
    login: userName,
    password: password,
  };
  try {
    setIsLoadingModal(true)
    clearLoginForm()
    const response = await axios.post('http://localhost:4000/api/auth', data);
    if (response.status === 200) {
      localStorage.setItem('login', response.data.login);
      localStorage.setItem('token', response.data.token);
      navigate('/home')
      setIsLoadingModal(false)
    }
    else {
      setIsLoadingModal(false)
      setLoginErrorModal(true)
    }
  }catch (error) {
    console.error('Error during registration:', error);
    setIsLoadingModal(false)
    setLoginErrorModal(true)
  }
}

export {handleLoginSubmission}