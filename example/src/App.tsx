import React from 'react';

import ReactButton from 'react-button-test-package';

function App() {
  return (
    <ReactButton
      text='111'
      classString='hello'
      onClick={() => console.log(111)}
    />
  );
}

export default App;
