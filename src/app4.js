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
    },
    validate:(values)=>{
      let errors ={};
      if(!values.name){
        errors.name = "name required"
      }
      if(!values.name){
        errors.name = "name required"
      }
      if(!values.email){
        errors.email = "email required"
      }
      if(!values.password){
        errors.password = "password required"
      }
      if(values.password.length<3 && values.password.length!==0){
        errors.password = "min 3 characters required"
      }
      return errors;
    }
  })

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label><b>Name</b></label><br/>
          <input type="text"    name="name"     id="name"    value={formik.values.name}    onChange={formik.handleChange}/><br />
          {formik.errors.name?<div style={{"color":"red"}}>{formik.errors.name}</div>:null}

          <label><b>E-mail</b></label><br />
          <input type="email"   name="email"     id="email"  value={formik.values.email}    onChange={formik.handleChange}/><br />
          {formik.errors.email?<div style={{"color":"red"}}>{formik.errors.email}</div>:null}

          <label><b>Password</b></label><br />
          <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}/><br />
          {formik.errors.password?<div style={{"color":"red"}}>{formik.errors.password}</div>:null}

          <button type="submit">Register</button>
        </form>
      </center>
    </div>
  )
}

export default App
