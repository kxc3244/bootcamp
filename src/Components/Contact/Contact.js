import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : kevin@wynisco.com </p>
          <p className="lead">Phone : 817 705 8144 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available morning 12PM CST to Bootcamp time via slack or whatsapp  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
