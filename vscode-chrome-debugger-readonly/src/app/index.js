import React from 'react'
import ReactDOM from 'react-dom'

const MyApp = () => (
  <div>
    It's a tiny app that has no other purpose than to show some bugs.
    <button
      onClick={() => {
        debugger
        console.log('bugs go away')
      }}
    >
      Kill bugs
    </button>
  </div>
)

ReactDOM.render(<MyApp />, document.getElementById('app'))
