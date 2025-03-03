import axios from 'axios';

const handleRegistryNewServantFormSubmission = async (event: React.FormEvent<HTMLFormElement>, name: string, sex: string, fatherProfession: string, youthProfession: string, clearServantForm: () => void, setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowServantRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowServantRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>) => {
  event.preventDefault();
  const data = {
    masterId: localStorage.getItem('login'),
    name: name,
    fatherProfession: fatherProfession.toLowerCase(),
    youthProfession: youthProfession.toLowerCase(),
  };
  try {
    setIsLoadingModal(true)
    clearServantForm()
    const response = await axios.post('http://localhost:4000/api/servant', data);
    if (response.status === 200) {
      setIsLoadingModal(false)
      setShowServantRegisteredToast(true)
    }
    else {
      setIsLoadingModal(false)
      setShowServantRegistryFailToast(true)
    }
  }catch (error) {
    console.error('Error during registration:', error);
    setIsLoadingModal(false)
    setShowServantRegistryFailToast(true)
  }
}

export { handleRegistryNewServantFormSubmission };