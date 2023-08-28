import React, { useState } from "react";
import WelcomeText from "./WelcomeText";
import Book from "./Book";
import CustomModal from "./CustomModal";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function HomePage() {
  const [modals, setModals] = useState([
    {
      isOpen: false,
      images: [
        "/book1/Book1-Cover.jpg",
        "/book1/Book1-1.jpg",
        "/book1/Book1-8.jpg",
        "/book1/Book1-3.jpg",
        "/book1/Book1-6.jpg",
        "/book1/Book1-c.jpg",
        "/book1/Book1-d.jpg",
        "/book1/Book1-e.jpg",
        "/book1/Book1-f.jpg",
        "/book1/Book1-2.jpg",
      ],
    },
    {
      isOpen: false,
      images: [
        "/book2/Book2-Cover.png",
        "/book2/Book2-1.jpg",
        "/book2/Book2-2.jpg",
        "/book2/Book2-3.jpg",
        "/book2/Book2-4.jpg",
      ],
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
      image: "/book1/Book1-Cover.jpg",
      link: "https://www.amazon.com/dp/B0C9S8B5ZJ",
      blurb: "Magical Princesses Coloring Book: Awesome Illustrations For Girls ages 8+",
      modalContent: (
        <div className="modal-content-div">
          <h5>
            {" "}
            Are you tired from endlessly searching for fun activities that can
            kindle the flames of your child's imagination? Do you long for
            smiles upon their faces without resorting to screens? Let me present
            to you "Magical Princesses Coloring Book" – a portal to enchantment,
            poised to transport your young one to a universe brimming with
            splendor and awe. Enclosed within its pages lies a world adorned
            with captivating depictions, portraying beautiful princesses adorned
            in resplendent gowns embellished with flowers, stars, and
            butterflies. Each of these characters beams with joy, giving an
            ambiance that is poised to enrapture the hearts of children aged 8
            and above, while simultaneously extending an enchanting escape to
            adults as well.
          </h5>
          <br />
          <p>Inside you’ll find:</p>

          <ul className="book-ul">
            <li>✅ 47 captivating black and white illustrations</li>

            <li>
              ✅ Enchanting magical princesses in exquisite dresses, adorned
              with flowers, stars, and butterflies
            </li>

            <li>✅ Single sided designs</li>

            <li>✅ Engaging scenes that invite artistic exploration</li>

            <li>
              ✅ Suitable for ages 8 and up, offering endless delight to adults
              as well
            </li>

            <li>
              ✅ Each page is thoughtfully designed with a greyed-out back,
              ensuring your colorful creations stay vibrant and flawless. Say
              goodbye to marker bleed-through!
            </li>
            <li>
              ✅ Range of artistic complexity, from simple to medium difficulty
            </li>
            <li>✅ Single-sided pages for easy removal and display</li>
            <li>
              ✅ Large print size (8.5x11 in.) for a comfortable coloring
              experience
            </li>
            <br />
            <p>
              Elevate any occasion with the gift of creativity – the "Magical
              Princesses Coloring Book" is the perfect treasure for kids ages 8
              and up!. Embark on this colorful journey of imagination by
              grabbing your copy NOW!
            </p>
          </ul>
          <br/>
          <br />
          <a
            href="https://www.amazon.com/dp/B0C9S8B5ZJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="amazon-buy-btn">Buy on Amazon</Button>
          </a>
        </div>
      ),
    },
    {
      image: "/book2/Book2-Cover.png",
      link: "https://www.amazon.com/dp/B0CDNSFL6S",
      blurb: "Summer Word Search Large Print: 100 Simplified Summer Themed Puzzles for Adults and Seniors",
      modalContent: (
        <div className="modal-content-div">
          <h5>
            {" "}
            Are you having trouble coming up with fun things to do to keep your
            mind active and occupied during those lazy summer days? Our 'Summer
            Word Search Large Print' book can help you put boredom to rest!
          </h5>
          <p>
            Enter this enchanted summertime world, where each puzzle calls with
            unique themes, beautiful backgrounds, and cleverly arranged clues.
            This book is designed to delight and challenge you at every step,
            whether you're a seasoned word-search enthusiast or a beginner
            seeking for a pleasant and exciting way to pass the time.
          </p>
          <br />

          <ul className="book-ul">
            <li>
              ✅ Discover 100 puzzles with summer themes, each with an original
              subject that will keep you engaged and mentally stimulated for
              hours.
            </li>

            <li>
              ✅ A perfect gift to engage seniors, adults, and teenagers
              equally, ensuring a fun word search activity for everyone.
            </li>

            <li>
              ✅ An effective way to exercise your memory, focus, and language
              skills
            </li>

            <li>
              ✅ Clues are thoughtfully organized in alphabetical order,
              ensuring a smooth and enjoyable solving experience.
            </li>

            <li>
              ✅ Simplified directions make it easy for readers of all ages and
              experience levels to dive into the word search excitement right
              away. Search these directions only: ➡️ ↘️ ⬇️ ↙️. No more backward
              searching!
            </li>

            <li>✅ One puzzle per page.</li>

            <li>
              ✅ Immerse yourself in a variety of vibrant backgrounds, perfectly
              capturing the essence of the season and setting the tone for your
              word hunt adventure.
            </li>

            <li>
              ✅ With a generous 1800 clues, this book is jam-packed with tons
              of challenging and exciting lingo.
            </li>

            <li>
              ✅ Need a little help? No worries! Solutions to each puzzle are
              conveniently located in the back of the book, so you can check
              your progress or find that elusive word with ease. The puzzles and
              solutions are also numbered providing you a quick way to locate
              and verify your answers, saving you time and effort.
            </li>

            <li>✅ 8.5 X 11 Inches (21.59 X 27.94 Cm)</li>

            <li>
              ✅ Puzzles crafted with a 20x20 grid, offering a delightful
              challenge without straining your eyes.
            </li>
            <br />
            <p>
              Grab your copy today and embark on an adventure of summer word
              exploration. From beach days to backyard barbecues, this book
              promises an unparalleled, brain-teasing experience that will keep
              you entertained all season long. Don't miss out on the ultimate
              summer word search challenge!
            </p>
          </ul>
          <br />
          <br />
          <a
            href="https://www.amazon.com/dp/B0CDNSFL6S"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="amazon-buy-btn">Buy on Amazon</Button>
          </a>
        </div>
      ),
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
