import { Modal, Spinner } from 'react-bootstrap';
import './LoadingModal.css';

function LoadingModal({ show }: { show: boolean }) {
  return (
    <Modal id="loading-modal" show={show} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div>Carregando...</div>
      </Modal.Body>
    </Modal>
  );
}

export default LoadingModal;