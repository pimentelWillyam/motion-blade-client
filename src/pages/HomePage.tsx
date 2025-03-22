import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBars/NavigationBar';

const HomePageContainer = styled(Container)`
  /* Add any general styles here if needed */
`;

const FirstRow = styled(Row)`
  padding-top: 1%;
`;

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login && !token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <HomePageContainer id="home-page">
      <FirstRow id="home-page-first-row">
        <NavigationBar />
      </FirstRow>
    </HomePageContainer>
  );
};

export default HomePage;
