import './MyServantsPage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'
import MyServantsTable from '../../components/Tables/MyServantsTable/MyServantsTable';

const MyServantsPage = () => {
  return (
    <Container id = "my-servants-page">
      <Row id = "my-servants-page-first-row">
        <NavigationBar />
      </Row>
      <Row id = "my-servants-page-second-row">
        <MyServantsTable />
      </Row>
    </Container>
        
      
  )
}

export default MyServantsPage