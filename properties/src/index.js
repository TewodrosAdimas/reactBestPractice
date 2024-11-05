import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) =>(
  <div>
    <h1>Hello {props.name}</h1>
  </div>
)

ReactDOM.render(<Hello name = "Tedi" ID = "1152"/>, document.getElementById("root"));