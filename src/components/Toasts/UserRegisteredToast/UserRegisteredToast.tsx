import { Toast } from 'react-bootstrap';
import './UserRegisteredToast.css';

function UserRegisteredToast({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <Toast id='toast' show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Header className='toast-header-success'>
        <strong className="me-auto">Sucesso</strong>
      </Toast.Header>
      <Toast.Body className='toast-body'>Usuário registrado com sucesso!</Toast.Body>
    </Toast>
  );
}

export default UserRegisteredToast;