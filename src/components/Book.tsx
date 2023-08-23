// Book.tsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import CustomModal from './CustomModal';

interface MyComponentProps {
  image: string;
  link: string;
  blurb: string;
  onOpenModal: (index: number) => void; // Updated function signature
}

const Book: React.FC<MyComponentProps> = (props) => {
  const { image, link, blurb, onOpenModal } = props;

  return (
    <li>
      <div className="card">
        <div className="image">
          <img src={image} alt="Book Cover" />
        </div>
        <div className="content">
          <p className="blurb">{blurb}</p>
          <p>Link: {link}</p>
          <Button variant="primary" onClick={() => onOpenModal(0)}>Open Modal</Button> {/* Pass an index value */}
          <CustomModal
            isOpen={false}
            closeModal={() => {}} // Placeholder function, as 'closeModal' is managed by the parent component
            content={<p>Modal Content</p>}
            images={[image]}
          />
        </div>
      </div>
    </li>
  );
}

export default Book;
