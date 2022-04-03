import './App.css';
import { Gallery } from './components/gallery';
import { Container } from 'react-bootstrap';
import uniqid from 'uniqid';

function App() {
  return (
    <>
      <h1>Rick and Morty characters</h1>
      <Container key={uniqid()} fluid={true}>
        <Gallery key={uniqid()}></Gallery>
      </Container>
    </>
  );
}

export default App;
