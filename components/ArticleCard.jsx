import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './ArticleCard.css'; // Import your custom CSS for styling

const ArticleCard = (props) => {
  return (
    <Card className="article-card">
      <Image src={props.image} className="article-image" wrapped ui={false} />
      <Card.Content>
        <Card.Header className="article-title">{props.title}</Card.Header>
        <Card.Description className="article-description">{props.description}</Card.Description>
        <Card.Meta className="article-author">Published by: {props.author}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button primary fluid className="article-read-more">
          Read More
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
