import React, { useState } from 'react';
import WelcomeText from './WelcomeText';
import Book from './Book';
import CustomModal from './CustomModal';
import { Container } from 'react-bootstrap';

function HomePage() {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      images: ['/Book1-Cover.png', '/Book1-a.svg', '/Book1-a.jpg', '/Book1-c.jpg', '/Book1-d.jpg', '/Book1-e.jpg', '/Book1-f.jpg'],
    },
    {
      isOpen: false,
      images: ['/Book2-Cover.png', '/.jpg', '/image6.jpg'],
    },
    // Add more modal data as needed
  ]);

  const openModal = (index: number) => {
    const updatedModals = [...modals];
    updatedModals[index].isOpen = true;
    setModals(updatedModals);
  };

  const closeModal = (index: number) => {
    const updatedModals = [...modals];
    updatedModals[index].isOpen = false;
    setModals(updatedModals);
  };

  const booksData = [
    {
      image: '/Book1-Cover.png',
      link: 'https://www.amazon.com/dp/B0C9S8B5ZJ',
      blurb: 'Magical Princesses Coloring Book',
    },
    {
      image: '/Book2-Cover.png',
      link: 'https://www.amazon.com/dp/B0C9S8B5ZJ',
      blurb: 'Summer Word Search Large Print',
    },
    // Add more book data as needed
  ];

  return (
    <>
      <Container>
        <WelcomeText />

        <ul className="centered-list">
          {booksData.map((book, index) => (
            <li key={index}>
              <Book
                image={book.image}
                link={book.link}
                blurb={book.blurb}
                onOpenModal={() => openModal(index)} // Pass the index to open the corresponding modal
              />
            </li>
          ))}
        </ul>

        {modals.map((modal, index) => (
          <CustomModal
            key={index}
            isOpen={modal.isOpen}
            closeModal={() => closeModal(index)}
            
            images={modal.images}
            content={<p>Hi There!</p>}
          />
        ))}
      </Container>
    </>
  );
}

export default HomePage;
