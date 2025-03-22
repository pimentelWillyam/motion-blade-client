import { Toast } from 'react-bootstrap';
import { XCircle, X } from 'lucide-react';
import styled from 'styled-components';

interface UserRegistryFailToastProps {
  show: boolean;
  onClose: () => void;
}

const StyledToast = styled(Toast)`
  background-color: #f8d7da !important;
  border-left: 5px solid #842029;
  color: #842029;
  padding: 12px;
  border-radius: 6px;
  min-width: 320px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FailToastText = styled.div`
  flex-grow: 1;
  p {
    margin: 0;
    font-size: 14px;
    color: #842029;
  }
`;

const ToastCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #842029;
  padding: 5px;

  &:hover {
    color: #5a1a1f;
  }
`;

function UserRegistryFailToast({ show, onClose }: UserRegistryFailToastProps) {
  return (
    <StyledToast show={show} onClose={onClose} delay={3000} autohide>
      <ToastContent>
        <ToastIcon>
          <XCircle size={20} color="#842029" />
        </ToastIcon>
        <FailToastText>
          <strong>Erro</strong>
          <p>Falha ao registrar o usuário.</p>
        </FailToastText>
        <ToastCloseButton onClick={onClose}>
          <X size={18} />
        </ToastCloseButton>
      </ToastContent>
    </StyledToast>
  );
}

export default UserRegistryFailToast;
