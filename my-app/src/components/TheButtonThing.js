import './App.css';

import React, { useState } from 'react';
import{Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  // State to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <Button onClick={toggleParagraph}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </Button>
      <hr />
      {isVisible && <p>This is the paragraph that appears and disappears.</p>}
    </div>
  );
}

export default App;
