import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import uniqid from 'uniqid';

export const CharacterCard = (props) => {
  const { image, name, gender, status } = props;
  return (
    <Card key={uniqid()}>
      <Card.Img key={uniqid()} variant="top" src={image}/>
      <Card.Body key={uniqid()}>
        <Card.Title key={uniqid()}>{name}</Card.Title>
        <Card.Text key={uniqid()}>
          Gender: {gender}<br></br>
          Status: {status}
        </Card.Text>
        <Button key={uniqid()} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};