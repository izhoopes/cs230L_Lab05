//import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';

//bad function name, don't care
function CardBois(){
	return(
	<div>
	
	<Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Body>
        <Card.Title>Card 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem', display: 'inline-block' }}>
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
