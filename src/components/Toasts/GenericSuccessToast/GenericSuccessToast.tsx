import { Toast } from 'react-bootstrap';
import { CheckCircle, X } from 'lucide-react';
import styled from 'styled-components';

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const StyledToast = styled(Toast)`
  background-color: #e9f5ec !important;
  border-left: 5px solid #2d6a4f;
  color: #155724;
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

const SuccessToastText = styled.div`
  flex-grow: 1;
  p {
    margin: 0;
    font-size: 14px;
    color: #155724 !important;
  }
`;

const ToastCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #155724;
  padding: 5px;

  &:hover {
    color: #0c3e26;
  }
`;

function GenericSuccessToast({
  show,
  onClose,
  title = "Sucesso",
  message = "Operação realizada com sucesso",
}: SuccessToastProps) {
  return (
    <StyledToast show={show} onClose={onClose} delay={3000} autohide>
      <ToastContent>
        <ToastIcon>
          <CheckCircle size={20} color="#2d6a4f" />
        </ToastIcon>
        <SuccessToastText>
          <strong>{title}</strong>
          <p>{message}</p>
        </SuccessToastText>
        <ToastCloseButton onClick={onClose}>
          <X size={18} />
        </ToastCloseButton>
      </ToastContent>
    </StyledToast>
  );
}

export default GenericSuccessToast;
