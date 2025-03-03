import axios from "axios";

const handleServantDeletion = async  (servantName: string,  setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setSucessToast: React.Dispatch<React.SetStateAction<boolean>>, setFailureToast: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    setIsLoadingModal(true)
    const response = await axios.delete(`http://localhost:4000/api/servant/${servantName}`);
    if (response.status === 200) {
      setIsLoadingModal(false)
      setSucessToast(true)
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

export {handleServantDeletion}