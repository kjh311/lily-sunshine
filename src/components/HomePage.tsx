import React, { useState } from 'react';
import WelcomeText from './WelcomeText';
import Book from './Book';
import CustomModal from './CustomModal';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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
      modalContent: <div className="modal-content-div">
        <a href="https://www.amazon.com/dp/B0C9S8B5ZJ" target="_blank" rel="noopener noreferrer"><Button>Buy on Amazon</Button></a>
       <h5> Are you tired from endlessly searching for fun activities that can kindle the flames of your child's imagination? Do you long for smiles upon their faces without resorting to screens?
Let me present to you "Magical Princesses Coloring Book" – a portal to enchantment, poised to transport your young one to a universe brimming with splendor and awe. Enclosed within its pages lies a world adorned with captivating depictions, portraying beautiful princesses adorned in resplendent gowns embellished with flowers, stars, and butterflies. Each of these characters beams with joy, giving an ambiance that is poised to enrapture the hearts of children aged 8 and above, while simultaneously extending an enchanting escape to adults as well.
</h5>
<p>Inside you’ll find:</p>


<p>✅ 47 captivating black and white illustrations</p>

<p>✅ Enchanting magical princesses in exquisite dresses, adorned with flowers, stars, and butterflies</p>

<p>✅ Single sided designs</p>

<p>✅ Engaging scenes that invite artistic exploration</p>

<p>✅ Suitable for ages 8 and up, offering endless delight to adults as well</p>

<p>✅ Each page is thoughtfully designed with a greyed-out back, ensuring your colorful creations stay vibrant and flawless. Say goodbye to marker bleed-through!
</p>
<p>✅ Range of artistic complexity, from simple to medium difficulty
</p>
<p>✅Single-sided pages for easy removal and display
</p>
<p>✅ Large print size (8.5x11 in.) for a comfortable coloring experience
</p>
<p>Elevate any occasion with the gift of creativity – the "Magical Princesses Coloring Book" is the perfect treasure for kids ages 8 and up!. Embark on this colorful journey of imagination by grabbing your copy NOW!
        </p><br/>
      </div>,
    },
    {
      image: '/Book2-Cover.png',
      link: 'https://www.amazon.com/dp/B0C9S8B5ZJ',
      blurb: 'Summer Word Search Large Print',
      modalContent: <p className="modal-content-p">Modal Content for Summer Word Search Large Print</p>,
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
            content={booksData[index].modalContent} // Use the modal content from booksData
          />
        ))}
      </Container>
    </>
  );
}

export default HomePage;
