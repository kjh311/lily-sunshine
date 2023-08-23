
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import CustomModal from "./Modal";


interface MyComponentProps {
  image: string;
  link: string;
  blurb: string;
}

const Books: React.FC<MyComponentProps> = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return ( 
    <>

{/* <div>
      <h1>React Lightbox Modal Example</h1>
      
      
    </div> */}
    {/* <div className="card-body"> */}
    {/* <Col className='col'> */}
    <li>
    <div className="card">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <p className="blurb">{props.blurb}</p>
        <Button variant="primary" onClick={openModal}>Open Modal</Button>
        <CustomModal isOpen={modalIsOpen} closeModal={closeModal} content={<p>Modal Content</p>} />
      </div>
      </div>
      </li>
      {/* </Col> */}
    {/* </div> */}
    
    </>
   );
}

export default Books;