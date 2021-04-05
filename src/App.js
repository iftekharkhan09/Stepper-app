import React from 'react';
import './App.css';
import WizardComponent from './Wizard';
import LinearFlow from './linear-flow/linear-flow';
import HorizontalNonLinearStepper from "./non-linear-flow/non-linear";

function App() {
  return (
    <div className="App">
      <h1>
        Movie Production
      </h1>
      <div className="container">
        <WizardComponent />
      </div>

      <div className="container">
        <LinearFlow />
      </div>
      <div className="container">
        <HorizontalNonLinearStepper />
      </div>

    </div>
  );
}

export default App;
