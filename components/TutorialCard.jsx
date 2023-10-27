import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './TutorialCard.css'; // Import your custom CSS for styling

const TutorialCard = (props) => {
  return (
    <Card className="tutorial-card">
      <Image src={props.image} wrapped ui={false} className="image" />
      <Card.Content className="content">
        <Card.Header className="header">{props.title}</Card.Header>
        <Card.Description className="description">{props.description}</Card.Description>
        <Card.Meta className="meta">Publisher: {props.username}</Card.Meta>
      </Card.Content>
      <Card.Content extra className="extra">
        <Button primary fluid className="button">
          Read More
        </Button>
      </Card.Content>
    </Card>
  );
};

export default TutorialCard;
