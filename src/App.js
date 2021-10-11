import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Container, ProgressBar, Button } from "react-bootstrap";
import { useState } from "react";
// import SliderPage from "./RangeSlide";
// import ProgressBar from "react-customizable-progressbar";
function App() {
  const [first, setFirst] = useState(80);
  const [second, setSecond] = useState(14);
  const [third, setThird] = useState(17);
  const Sum = first + second + third;

  const increase = () => {
    setFirst(first + 10);
  };
  const decrease = () => {
    setFirst(first - 10);
  };
  const increase1 = () => {
    setSecond(second + 10);
  };
  const decrease1 = () => {
    setSecond(second - 10);
  };
  const increase2 = () => {
    setThird(third + 10);
  };
  const decrease2 = () => {
    setThird(third - 10);
  };
  return (
    <div className="App">
      <div>
        <h1>Progress Bar</h1>{" "}
        <Container>
          <ProgressBar striped now={first} label={`${first}%`} />
          <br></br>
          <Button variant="primary" onClick={decrease}>
            -
          </Button>{" "}
          <Button variant="danger" onClick={increase}>
            +
          </Button>{" "}
          <br></br> <br></br>{" "}
          <ProgressBar striped now={second} label={`${second}%`} />
          <br></br>
          <Button variant="primary" onClick={decrease1}>
            -
          </Button>{" "}
          <Button variant="danger" onClick={increase1}>
            +
          </Button>
          <br></br> <br></br>
          <ProgressBar striped now={third} label={`${third}%`} />
          <br></br>{" "}
          <div className="btns">
            <Button variant="primary" onClick={decrease2}>
              -
            </Button>{" "}
            <Button variant="danger" onClick={increase2}>
              +
            </Button>{" "}
          </div>{" "}
        </Container>
        <center>
          <h2>Total is {Sum}</h2>
        </center>
      </div>
    </div>
  );
}

export default App;
