import { Toast } from 'react-bootstrap';
import './UserRegistryFailToast.css';

function UserRegistryFailToast({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Header className="toast-header-fail">
        <strong className="me-auto">Erro</strong>
      </Toast.Header>
      <Toast.Body>Falha ao registrar o usuário!</Toast.Body>
    </Toast>
  );
}

export default UserRegistryFailToast;