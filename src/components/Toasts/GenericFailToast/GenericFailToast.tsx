import { Toast } from 'react-bootstrap';
import { XCircle, X } from 'lucide-react';
import './GenericFailToast.css';

interface ErrorToastProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

function GenericFailToast({ 
  show, 
  onClose, 
  title = "Erro", 
  message = "Ocorreu um erro inesperado." 
}: ErrorToastProps) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide className="custom-toast-error">
      <div className="toast-content">
        <div className="toast-icon">
          <XCircle size={20} color="#842029" />
        </div>
        <div className="error-toast-text">
          <strong>{title}</strong>
          <p>{message}</p>
        </div>
        <button className="toast-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
    </Toast>
  );
}

export default GenericFailToast;
