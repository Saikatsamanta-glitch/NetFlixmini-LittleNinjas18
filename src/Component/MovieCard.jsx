import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} height="250px" width="200px"/>
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;