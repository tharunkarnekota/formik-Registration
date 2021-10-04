//just for my reference ,main file is app.js

import React from 'react'

const App = () => {
  return (
    <div>
      <center>
        <form>
          <label><b>Name</b></label><br/>
          <input type="text" name="name" id="name"/><br />

          <label><b>E-mail</b></label><br />
          <input type="email" name="email" id="email"/><br />

          <label><b>Password</b></label><br />
          <input type="password" name="password" id="password"/><br />

          <button type="submit">Register</button>
        </form>
      </center>
    </div>
  )
}

export default App
