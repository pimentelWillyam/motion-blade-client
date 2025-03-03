import './HomePage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {

  const navigate = useNavigate();
  
    useEffect(() => {
        const login = localStorage.getItem("login")
        const token = localStorage.getItem("token")
    
        if (!login && !token ) {
          navigate("/");
        }
      }, []);
      
  return (
    <Container id = "home-page">
      <Row id = "home-page-first-row">
        <NavigationBar />
      </Row>
    </Container>
        
      
  )
}

export default HomePage