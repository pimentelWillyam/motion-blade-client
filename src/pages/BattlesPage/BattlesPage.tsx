import './BattlesPage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'
import BattlesTable from '../../components/Tables/BattlesTable/BattlesTable';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BattlesPage = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
      const login = localStorage.getItem("login")
      const token = localStorage.getItem("token")
  
      if (!login && !token ) {
        navigate("/");
      }
    }, []);

  return (
    <Container id = "my-servants-page">
      <Row id = "my-servants-page-first-row">
        <NavigationBar />
      </Row>
      <Row id = "my-servants-page-second-row">
        <BattlesTable />
      </Row>
    </Container>
        
      
  )
}

export default BattlesPage