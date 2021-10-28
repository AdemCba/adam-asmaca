import React from "react";
import Hangman from './components/Hangman'
import './App.css'
import {Row,Col} from "reactstrap"



function App() {
  return (
    <div >

      <Row>
        <Col xs="3" className="App">

        </Col>

        <Col xs="6">
        <Hangman></Hangman>
        </Col>

        <Col xs="3"  className="App">
        
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
