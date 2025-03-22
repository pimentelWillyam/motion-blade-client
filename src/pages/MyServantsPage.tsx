import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import NavigationBar from '../components/NavigationBars/NavigationBar';
import Row from 'react-bootstrap/Row';
import MyServantsTable from '../components/Tables/MyServantsTable/MyServantsTable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingModal from '../components/Modals/LoadingModal';
import GenericSuccessToast from '../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../components/Toasts/GenericFailToast/GenericFailToast';

const StyledContainer = styled(Container)`
`;

const FirstRow = styled(Row)`
  padding-top: 1%;
`;

const SecondRow = styled(Row)`
  padding-top: 5%;
`;

const MyServantsPage = () => {
  const navigate = useNavigate();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [failureToast, setFailureToast] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    if (!login && !token) {
      navigate("/");
    }
  }, []);

  return (
    <StyledContainer>
      <LoadingModal show={isLoadingModal} />
      <GenericSuccessToast show={successToast} onClose={() => setSuccessToast(false)} />
      <GenericFailToast show={failureToast} onClose={() => setFailureToast(false)} />
      <FirstRow>
        <NavigationBar />
      </FirstRow>
      <SecondRow>
        <MyServantsTable 
          setIsLoadingModal={setIsLoadingModal} 
          setSuccessToast={setSuccessToast} 
          setFailureToast={setFailureToast} 
        />
      </SecondRow>
    </StyledContainer>
  );
};

export default MyServantsPage;
