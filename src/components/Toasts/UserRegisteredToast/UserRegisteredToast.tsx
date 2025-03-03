import { Toast } from 'react-bootstrap';
import { CheckCircle, X } from 'lucide-react'; // Ícones
import './UserRegisteredToast.css';

function UserRegisteredToast({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide className="custom-toast-success">
      <div className="toast-content">
        <div className="toast-icon">
          <CheckCircle size={20} color="#2d6a4f" />
        </div>
        <div className="success-toast-text">
          <strong>Sucesso</strong>
          <p>Usuário registrado com sucesso.</p>
        </div>
        <button className="toast-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
    </Toast>
  );
}

export default UserRegisteredToast;
