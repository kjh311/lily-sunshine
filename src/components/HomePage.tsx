import React, { useState } from 'react';
import WelcomeText from './WelcomeText';
import Book from './Book';
import CustomModal from './CustomModal';
import { Container } from 'react-bootstrap';

function HomePage() {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      images: ['/Coloring-book.png', '/image2.jpg', '/image3.jpg'],
    },
    {
      isOpen: false,
      images: ['/word-search-thumbnail.png', '/image5.jpg', '/image6.jpg'],
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
      image: '/Coloring-book.png',
      link: 'https://www.amazon.com/dp/B0C9S8B5ZJ',
      blurb: 'Magical Princesses Coloring Book',
    },
    {
      image: '/word-search-thumbnail.png',
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
            content={<p>Modal Content for Book {index + 1}</p>}
            images={modal.images}
          />
        ))}
      </Container>
    </>
  );
}

export default HomePage;
