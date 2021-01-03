import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Map from './Map';
import SearchResults from './SearchResults.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


<p>This is what it is</p>
      </header>

      <Container fluid id="App-body">

        <Row>
          <Col xs={12} md={8}>
            <Map />
          </Col>
          <Col xs={6} md={4}>
            <SearchResults />
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default App;
