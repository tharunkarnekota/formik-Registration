//just for my reference ,main file is app.js

import React from 'react'
import { useFormik } from 'formik'

const App = () => {
  const formik = useFormik({
    initialValues : {
      name: '',
      email: '',
      password: '',
    },
    onSubmit:(values)=>{
      console.log(values)
    //axios.post('...url...',{values})         if you wanna send to another server
    }
  })

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label><b>Name</b></label><br/>
          <input type="text"    name="name"     id="name"    value={formik.values.name}    onChange={formik.handleChange}/><br />

          <label><b>E-mail</b></label><br />
          <input type="email"   name="email"     id="email"  value={formik.values.email}    onChange={formik.handleChange}/><br />

          <label><b>Password</b></label><br />
          <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}/><br />

          <button type="submit">Register</button>
        </form>
      </center>
    </div>
  )
}

export default App
