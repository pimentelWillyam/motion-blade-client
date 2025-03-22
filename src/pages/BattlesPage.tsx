import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import BattlesTable from '../components/Tables/BattlesTable/BattlesTable';
import NavigationBar from '../components/NavigationBars/NavigationBar';

const MyServantsPage = styled(Container)`
  /* Add any general styles here if needed */
`;

const FirstRow = styled(Row)`
  padding-top: 1%;
`;

const SecondRow = styled(Row)`
  padding-top: 5%;
`;

const BattlesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login && !token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <MyServantsPage id="my-servants-page">
      <FirstRow id="my-servants-page-first-row">
        <NavigationBar />
      </FirstRow>
      <SecondRow id="my-servants-page-second-row">
        <BattlesTable />
      </SecondRow>
    </MyServantsPage>
  );
};

export default BattlesPage;
