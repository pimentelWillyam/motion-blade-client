import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

interface LoadingModalProps {
  show: boolean;
}

const StyledModal = styled(Modal)`
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .spinner-border {
    margin-bottom: 10px;
  }

  .modal-body div {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const LoadingModal: React.FC<LoadingModalProps> = ({ show }) => {
  return (
    <StyledModal id="loading-modal" show={show} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div>Carregando...</div>
      </Modal.Body>
    </StyledModal>
  );
};

export default LoadingModal;
