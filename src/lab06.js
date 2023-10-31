//import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css";



function Navigation(){
	return(
		<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
	);
}

//bad function name, don't care
function CardBois(){
	return(
	<div>
	
	<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
	
	</div>
	);
}


export default CardBois;

export {
  Navigation,
  //CardBois,
}