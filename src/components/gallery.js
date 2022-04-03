import React, {useState, useEffect} from 'react';
import { CharacterCard } from './characterCard';
import { Row, Col } from 'react-bootstrap';
import uniqid from 'uniqid';

export const Gallery = () => {
  const API = 'https://rickandmortyapi.com/api/character';
  let [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((data) => setCharacters(data.results))
  }, []);

  return (
    <Row key={uniqid()} className="row-cols-6">
      {characters && characters.map((char, index) => {
        return <Col key={uniqid()} className="p-3">
          <CharacterCard
            image={char.image}
            name={char.name}
            gender={char.gender}
            status={char.status}
          ></CharacterCard>
        </Col>
      })}
    </Row>
  );
};
