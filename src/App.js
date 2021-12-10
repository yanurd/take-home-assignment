import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [conversionMode, setConversionMode] = React.useState('lowercase');
  const [textOutput, setTextOutput] = React.useState('');

  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const changeText = conversionMode === 'lowercase' ? textInput.toLowerCase() : textInput.toUpperCase()
    setTextOutput(changeText)
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
        <form onSubmit={handleSubmit}>
          <div className="form-control form-control__text">
            <label htmlFor="text">Text to be converted:</label>
            <textarea
              id="text"
              onChange={handleTextareaChange}
              value={textInput}
            />
          </div>
          <div className="form-control form-control__radio">
            <input
              type="radio"
              name="conversion"
              id="conversion-0"
              value="lowercase"
              checked={conversionMode === "lowercase"}
              onChange={handleRadioChange}
            />
            <label htmlFor="conversion-0">Convert text to lowercase</label>
          </div>
          <div className="form-control form-control__radio">
            <input
              type="radio"
              name="conversion"
              id="conversion-1"
              value="uppercase"
              checked={conversionMode === "uppercase"}
              onChange={handleRadioChange}
            />
            <label htmlFor="conversion-1">Convert text to uppercase</label>
          </div>
          <input type="submit" value="Submit" />
          <div className="result-wrapper form-control form-control__text">
            <label htmlFor="result">Converted text:</label>
            <output id="result">{textOutput}</output>
          </div>
        </form>
    </div>
  );
}

export default App;
