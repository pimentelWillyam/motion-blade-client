import "./ServantPage.css";
import Container from "react-bootstrap/Container";
import LoadingModal from "../../components/Modals/LoadingModal/LoadingModal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBars/NavigationBar/NavigationBar";
import axios from "axios";
import { Servant } from "../../types/Servant";

const ServantPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [servant, setServant] = useState<Servant | null>(null); // 🔹 Estado inicial

  const fetchBattleUpdate = async () => {
    try {
      console.log(name)
      const response = await axios.get(
        `http://localhost:4000/api/servant/${name}`
      );
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
      fetchBattleUpdate()
    }
  }, []);

  return (
    <Container id="register-user-page">
      <Row className="navigation-bar-row">
        <NavigationBar />
      </Row>
      <Row className="navigation-bar-row">
        <Container>
          <p>Nome: {servant?.name}</p>
          <br />
          <p>Atributos:</p>
          <p>agilidade: {servant?.maximumAttributes.agility}</p>
          <p>força: {servant?.maximumAttributes.strength}</p>
          <p>técnica: {servant?.maximumAttributes.technique}</p>
          <p>fortitude: {servant?.maximumAttributes.fortitude}</p>
        </Container>
      </Row>
      <LoadingModal show={isLoadingModal} />
    </Container>
  );
};

export { ServantPage };
