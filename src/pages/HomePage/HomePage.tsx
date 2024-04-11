import './HomePage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'

const HomePage = () => {
  return (
    <Container id = "home-page">
      <Row id = "home-page-first-row">
        <NavigationBar />
      </Row>
    </Container>
        
      
  )
}

export default HomePage