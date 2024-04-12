import './BattlesPage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'
import BattlesTable from '../../components/Tables/BattlesTable/BattlesTable';

const BattlesPage = () => {
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