import './MyServantsPage.css'


import Container from 'react-bootstrap/Container'
import NavigationBar from '../../components/NavigationBars/NavigationBar/NavigationBar';
import Row from 'react-bootstrap/Row'
import MyServantsTable from '../../components/Tables/MyServantsTable/MyServantsTable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingModal from '../../components/Modals/LoadingModal/LoadingModal';
import GenericSuccessToast from '../../components/Toasts/GenericSuccessToast/GenericSuccessToast';
import GenericFailToast from '../../components/Toasts/GenericFailToast/GenericFailToast';

const MyServantsPage = () => {
  const navigate = useNavigate();

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [failureToast, setFailureToast] = useState(false);

    useEffect(() => {
        const login = localStorage.getItem("login")
        const token = localStorage.getItem("token")

        if (!login && !token ) {
          navigate("/");
        }
      }, []);
  return (
    <Container id = "my-servants-page">
      <LoadingModal show={isLoadingModal} />

      <GenericSuccessToast show={successToast} onClose={() => setSuccessToast(false)} />
      <GenericFailToast show={failureToast} onClose={() => setFailureToast(false)} />
      <Row id = "my-servants-page-first-row">
        <NavigationBar />
      </Row>
      <Row id = "my-servants-page-second-row">
        <MyServantsTable setIsLoadingModal={setIsLoadingModal} setSuccessToast={setSuccessToast} setFailureToast={setFailureToast} />
      </Row>
    </Container>


  )
}

export default MyServantsPage