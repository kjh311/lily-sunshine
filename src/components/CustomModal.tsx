// CustomModal.tsx
import React from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import ImageSlider from './ImageSlider';

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content: React.ReactNode; // Content can be defined within the modal
  images: string[]; // Images can be defined within the modal
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, content, images }) => {
  return (
    <div>
      {isOpen && (
        <div className="overlay" onClick={closeModal}></div>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Lightbox Modal"
        style={{
          overlay: {
            zIndex: 1000, // Adjust the z-index value as needed
          },
          content: {
            // Define modal styles here
          },
        }}
      >
        <Button variant="danger" className="close-button" onClick={closeModal}>X</Button>
        {/* Use the ImageSlider component */}
        <ImageSlider images={images} />

        {/* Render the modal content */}
        {content}

        {/* Other modal content can go here */}
      </Modal>
    </div>
  );
};

export default CustomModal;
