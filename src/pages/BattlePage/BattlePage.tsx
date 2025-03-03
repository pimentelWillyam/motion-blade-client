import "./BattlePage.css";
import Container from "react-bootstrap/Container";
import LoadingModal from "../../components/Modals/LoadingModal/LoadingModal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBars/NavigationBar/NavigationBar";
import BattleBoard from "../../components/Boards/BattleBoard/BattleBoard";
import axios from "axios";
import DatabaseBattle from "../../models/DatabaseBattle"; // Certifique-se de importar o tipo correto

const BattlePage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [battle, setBattle] = useState<DatabaseBattle | null>(null); // 🔹 Estado inicial

  const fetchBattleUpdate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/battle/${name}`
      );
      setBattle(response.data);
    } catch (error) {
      console.error("Erro ao buscar atualização da batalha:", error);
    }

    setTimeout(fetchBattleUpdate, 2000);
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login || !token) {
      navigate("/");
    } else {
      fetchBattleUpdate(); // 🔹 Chamar a primeira atualização ao montar o componente
    }
  }, []);

  return (
    <Container id="register-user-page">
      <Row className="navigation-bar-row">
        <NavigationBar />
      </Row>
      <LoadingModal show={isLoadingModal} />
      {battle ? <BattleBoard battle={battle} /> : <p>Carregando batalha...</p>}
    </Container>
  );
};

export { BattlePage };
