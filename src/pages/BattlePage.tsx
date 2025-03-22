import { Container, Row, Col } from "react-bootstrap";
import LoadingModal from "../components/Modals/LoadingModal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBars/NavigationBar";
import BattleBoard from "../components/Boards/BattleBoard";
import axios from "axios";
import { Servant } from "../types/Servant";
import { SelectedServantColumn } from '../components/Columns/SelectedServantColumn';
import ServantListRow from "../components/Rows/ServantListRow";
import { ActionButtonGroupCollumn } from '../components/Columns/ActionButtonGroupCollumn';
import { SelectedAction } from "../types/SelectedAction";
import { Battle } from "../types/Battle";
import { FetchServantsByUser } from "../helpers/servantHelpers/FetchServantsByUser";
import { BattleLog } from "../components/Logs/BattleLog";
import styled from "styled-components";

const RegisterBattlePage = styled(Container)`
  padding-top: 1vh;
  height: 100vh;
  width: 100vw;
`;

const NavigationBarRow = styled(Row)`
  margin-bottom: 1%;
`;


const BattlePage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [battle, setBattle] = useState<Battle | null>(null);
  const [servantList, setServantList] = useState<Servant[] | null>(null);
  const [selectedServant, setSelectedServant] = useState<Servant | null>(null);
  const [selectedAction, setSelectedAction] = useState<SelectedAction | null>(null);

  const messages = [
    "O guerreiro atacou com sua espada!",
    "O dragão soltou uma bola de fogo!",
    "O mago conjurou uma tempestade elétrica!",
    "O arqueiro disparou uma flecha precisa!",
    "O escudo bloqueou o ataque inimigo!",
    "O monstro rugiu ferozmente!",
    "O herói usou uma poção de cura!",
    "O vilão desferiu um golpe crítico!",
    "A armadura absorveu parte do dano!",
    "A batalha ficou mais intensa!",
    "O guerreiro esquivou do ataque!",
    "O mago lançou uma bola de gelo!",
    "O arqueiro mirou no ponto fraco do inimigo!",
    "O dragão bateu suas asas com força!",
    "O ladrão se escondeu nas sombras!",
    "O paladino usou um feitiço de proteção!",
    "O inimigo está enfraquecido!",
    "O herói carregou um ataque devastador!",
    "O monstro foi derrotado!",
    "A batalha chegou ao fim com vitória dos heróis!",
  ];

  const ws = new WebSocket('ws://localhost:5000');

  ws.onopen = () => {
    console.log('Conectado ao servidor WebSocket');
    ws.send(JSON.stringify({ type: 'subscribe', itemId: 42 }));
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log('Atualização recebida:', data);
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
    }
  };

  ws.onclose = () => {
    console.log('Conexão WebSocket fechada');
  };

  ws.onerror = (error) => {
    console.error('Erro no WebSocket:', error);
  };

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

  const fetchServantsInfo = async (login: string) => {
    setServantList(await FetchServantsByUser.execute(login));
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");
    if (!login || !token) {
      navigate("/");
    } else {
      fetchBattleUpdate(); // 🔹 Chamar a primeira atualização ao montar o componente
      fetchServantsInfo(login);
    }
  }, []);

  return (
    <RegisterBattlePage id="register-user-page">
      <LoadingModal show={isLoadingModal} />
      <NavigationBarRow className="navigation-bar-row">
        <NavigationBar />
      </NavigationBarRow>
      <Row>
        <BattleLog messages={messages} />
      </Row>
      <Row>
        <Col sm={3}>
          <SelectedServantColumn selectedServant={selectedServant} />
        </Col>
        <Col>
          {battle ? (
            <BattleBoard
              battle={battle}
              selectedServant={selectedServant}
              setSelectedServant={setSelectedServant}
              selectedAction={selectedAction}
              setSelectedAction={setSelectedAction}
            />
          ) : (
            <p>Carregando batalha...</p>
          )}
        </Col>
        <Col sm={3}>
          <ActionButtonGroupCollumn
            battle={battle}
            selectedServant={selectedServant}
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
          />
        </Col>
      </Row>
      <ServantListRow
        selectedServant={selectedServant}
        listOfServants={servantList}
        setSelectedServant={setSelectedServant}
      />
    </RegisterBattlePage>
  );
};

export { BattlePage };
