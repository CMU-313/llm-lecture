import React from 'react';
import Game from './Game';

/**
 * The App component is a top-level container component that renders the Game component.
 * @returns {JSX.Element} The App component JSX markup.
 */
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
