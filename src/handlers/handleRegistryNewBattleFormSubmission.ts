import axios from 'axios';

const handleRegistryNewBattleFormSubmission = async (event: React.FormEvent<HTMLFormElement>, name: string, clearServantForm: () => void, setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean>>, setShowBattleRegisteredToast: React.Dispatch<React.SetStateAction<boolean>>, setShowBattleRegistryFailToast: React.Dispatch<React.SetStateAction<boolean>>) => {
  event.preventDefault();
  const data = {
    name: name,
  };
  try {
    setIsLoadingModal(true)
    clearServantForm()
    if (name.length <1) throw new Error('Nome de batalha inválido')
    const response = await axios.post('http://localhost:4000/api/battle', data);
    if (response.status === 200) {
      setIsLoadingModal(false)
      setShowBattleRegisteredToast(true)
    }
    else {
      setIsLoadingModal(false)
      setShowBattleRegistryFailToast(true)
    }
  }catch (error) {
    console.error('Error during registration:', error);
    setIsLoadingModal(false)
    setShowBattleRegistryFailToast(true)
  }
}

export { handleRegistryNewBattleFormSubmission };