import { Toast } from 'react-bootstrap';
import { XCircle, X } from 'lucide-react'; // Ícones
import './UserRegistryFailToast.css';

function UserRegistryFailToast({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide className="custom-toast-error">
      <div className="toast-content">
        <div className="toast-icon">
          <XCircle size={20} color="#842029" />
        </div>
        <div className="fail-toast-text">
          <strong>Erro</strong>
          <p>Falha ao registrar o usuário.</p>
        </div>
        <button className="toast-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
    </Toast>
  );
}

export default UserRegistryFailToast;
