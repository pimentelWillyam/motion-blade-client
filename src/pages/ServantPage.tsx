import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import LoadingModal from '../components/Modals/LoadingModal';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBars/NavigationBar';
import axios from 'axios';
import { Servant } from '../types/Servant';

const StyledContainer = styled(Container)`
  padding-top: 1vh;
  height: 100vh;
  width: 100vw;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10vw;
  height: 10vh;
`;

const ServantPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [servant, setServant] = useState<Servant | null>(null);

  const fetchBattleUpdate = async () => {
    try {
      console.log(name);
      const response = await axios.get(`http://localhost:4000/api/servant/${name}`);
      setServant(response.data);
    } catch (error) {
      console.error("Erro ao buscar atualização da batalha:", error);
    }
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login || !token) {
      navigate("/");
    } else {
      fetchBattleUpdate();
    }
  }, []);

  return (
    <StyledContainer>
      <Row className="navigation-bar-row">
        <NavigationBar />
      </Row>
      <Row className="navigation-bar-row">
        <Container>
          <p>Nome: {servant?.name}</p>
          <br />
          <p>Atributos:</p>
          <p>Agilidade: {servant?.maximumAttributes.agility}</p>
          <p>Força: {servant?.maximumAttributes.strength}</p>
          <p>Técnica: {servant?.maximumAttributes.technique}</p>
          <p>Fortitude: {servant?.maximumAttributes.fortitude}</p>
        </Container>
      </Row>
      <LoadingModal show={isLoadingModal} />
      <SecondRow />
    </StyledContainer>
  );
};

export { ServantPage };
