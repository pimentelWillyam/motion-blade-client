import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './GenericModal.css';

interface GenericModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  bodyText: string;
}

const GenericModal: React.FC<GenericModalProps> = ({ show, onHide, title, bodyText }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericModal;
