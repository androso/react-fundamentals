// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  const handleSubmit = event => {
    event.preventDefault()
    console.log(event.target.elements.username.value)
    // console.log(inputRef.current.value);
    // inputRef.current.value = 'canserber - na'
  }
  const handleInputChange = event => {
    setUsername(event.target.value.toLowerCase());
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          onChange={handleInputChange}
          value={username}
          name="username"
          type="text"
          ref={inputRef}
        />
        {error && (
          <span style={{color: 'tomato', fontWeight: 'bold'}} role={'alert'}>
            {error}
          </span>
        )}
      </div>
      <button type="submit" disabled={error ? true : false}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
