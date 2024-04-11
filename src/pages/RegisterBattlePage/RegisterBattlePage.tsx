import './RegisterBattlePage.css'


import Container from 'react-bootstrap/Container'
import RegisterNewBattleForm from '../../components/Forms/RegisterNewBattleForm/RegisterNewBattleForm';

const RegisterNewBattlePage = () => {
  return (
    <Container id = 'register-user-page'>
      <RegisterNewBattleForm />
    </Container>

        
      
  )
}

export { RegisterNewBattlePage }