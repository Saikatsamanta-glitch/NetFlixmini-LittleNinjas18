import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { card_linkstyle } from '../Resource/style';

function BasicExample(props) {
  return (
    <Card className="movie_card">
      <Card.Img variant="top" src={props.img} height="250px" width="200px"/>
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="warning"> <NavLink to={'/player/'+props.id+"/"+props.type} style={card_linkstyle} > Play it 🎬 </NavLink>  </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

// https://www.youtube.com/watch?v=miApM8-orkA