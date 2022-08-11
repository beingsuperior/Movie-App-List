/*

  Reusable Component
  
*/

import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ConfirmationModal = ({
  showModal,
  modalTitle,
  modalDescription,
  handleBtnClose,
  handleBtnConfirm,
  handleRememberIsChecked,
}) => {
  return (
    <Modal
      show={showModal.isVisible}
      onHide={handleBtnClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalDescription}</p>

        <Form.Check
          id="remember-checkbox"
          label="Don't ask again"
          onChange={handleRememberIsChecked}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleBtnClose}>
          Close
        </Button>
        <Button variant="primary btn-danger" onClick={handleBtnConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
