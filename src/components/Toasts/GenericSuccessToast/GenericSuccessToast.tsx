import { Toast } from 'react-bootstrap';
import { CheckCircle, X } from 'lucide-react';
import './GenericSuccessToast.css';

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

function GenericSuccessToast({ 
  show, 
  onClose, 
  title = "Sucesso", 
  message = "Operação realizada com sucesso." 
}: SuccessToastProps) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide className="custom-toast-success">
      <div className="toast-content">
        <div className="toast-icon">
          <CheckCircle size={20} color="#2d6a4f" />
        </div>
        <div className="success-toast-text">
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

export default GenericSuccessToast;
