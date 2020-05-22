import React from 'react'
import ReactDOM from 'react-dom'
import { default as CoolComponent } from './cool-component'

const MyApp = () => {
  console.log('breakpoint location')

  return (
    <div>
      <div>It's a tiny app that has no other purpose than to show some bugs.</div>
      <CoolComponent />
      <button
        onClick={() => {
          // debugger
          console.log('bugs go away')
          console.log('bugs go away 1')
          console.log('bugs go away 2')
        }}
      >
        Kill bugs
      </button>
    </div>
  )
}

ReactDOM.render(<MyApp />, document.getElementById('app'))
