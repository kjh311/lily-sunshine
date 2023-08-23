import WelcomeText from "./WelcomeText";
import Book from "./Book";


// import Row from 'react-bootstrap/Row';
import { Container, ListGroup } from "react-bootstrap";

function HomePage() {


  return (
    <>
      <Container>
        <WelcomeText />

     

        <ul className="centered-list">
          <Book
            image="/Coloring-book.png"
            link="https://www.amazon.com/dp/B0C9S8B5ZJ"
            blurb="Magical Princesses Coloring Book"
          />
          <Book
            image="/word-search-thumbnail.png"
            link="https://www.amazon.com/dp/B0CDNSFL6S"
            blurb="Summer Word Search Large Print"
          />
          <Book
            image="/Coloring-book.png"
            link="https://www.amazon.com/dp/B0C9S8B5ZJ"
            blurb="Magical Princesses Coloring Book"
          />
          <Book
            image="/word-search-thumbnail.png"
            link="https://www.amazon.com/dp/B0CDNSFL6S"
            blurb="Summer Word Search Large Print"
          />
        </ul>
       
      </Container>
     
    </>
  );
}

export default HomePage;
