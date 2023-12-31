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
      <div className="card">
        <div className="image">
          <img src={image} alt="Book Cover" />
        </div>
        <div className="content">
          <p className="blurb">{blurb}</p>
          {/* <p>Link: {link}</p> */}
          <Button className="book-btn" variant="warning" onClick={() => onOpenModal(0)}>More Info</Button> {/* Pass an index value */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="book-btn" variant="primary">Buy on Amazon</Button>
          </a>
          <CustomModal
            isOpen={false}
            closeModal={() => {}} // Placeholder function, as 'closeModal' is managed by the parent component
            content={<p></p>}
            images={[image]}
          />
        </div>
      </div>
  );
}

export default Book;
