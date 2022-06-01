import React from 'react';
import ReactDOM from "react-dom";
import Calculadora from './Calculadora'

function Index() {
  return (
    <div>
        <Calculadora />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));