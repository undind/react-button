import React from 'react'

import ReactButton from 'react-button-test-package'

function App() {
  return (
    <div>
      <ReactButton text='111' classString='hello' onClick={() => console.log(111)} />
    </div>
  )
}

export default App
