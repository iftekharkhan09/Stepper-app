import React, {useState} from 'react';
import './App.css';
import WorkflowComponent from './Wizard';
import wizardConfig from "./config/wizard";
import MovieSelector from "./Movies/MovieSelector"
function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div className="App">
      <h1>
        DC Animated Movie Universe
      </h1>
      <MovieSelector value={selectedMovie} onChange={setSelectedMovie} />
      <div className="container">
        { selectedMovie && <WorkflowComponent movie={selectedMovie} allSteps={wizardConfig} /> }
      </div>
    </div>
  );
}

export default App;
