import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

interface GenericModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  bodyText: string;
}

const CustomModal = styled(Modal)`
  .modal-content {
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border: none;
  }

  .modal-header {
    background-color: #007bff;
    color: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .modal-body {
    font-size: 16px;
    color: #333;
    padding: 20px;
  }

  .modal-footer {
    border-top: none;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
  }

  .btn-close {
    filter: invert(1);
  }

  .modal-footer .btn-secondary {
    background-color: #6c757d;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    transition: 0.3s ease;
  }

  .modal-footer .btn-secondary:hover {
    background-color: #5a6268;
  }
`;

const GenericModal: React.FC<GenericModalProps> = ({ show, onHide, title, bodyText }) => {
  return (
    <CustomModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </CustomModal>
  );
};

export default GenericModal;
