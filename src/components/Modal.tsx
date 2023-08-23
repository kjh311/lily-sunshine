import React from 'react';
import Modal from 'react-modal';
import CloseButton from 'react-bootstrap/CloseButton';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, content }) => {
  return (
    <div>
      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <button className="close-button"><img src="./close-x.png" alt="" /></button>
          {/* <CloseButton className="close-button" /> */}
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Lightbox Modal"
      >
        {content}
      </Modal>
    </div>
  );
};

export default CustomModal;