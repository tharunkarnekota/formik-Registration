//just for my reference ,main file is app.js

import React from 'react'
import { useFormik } from 'formik'

const App = () => {
  const data = useFormik({
    initialValues : {
      name: '',
      email: '',
      password: '',
      result: ''
    },
    onSubmit:(values)=>{
      console.log(values)
    //axios.post('...url...',{values})         if you want to send data to another server
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
        <div className="card" style={{"width":"25rem"}}>
        <form autoComplete="off" onSubmit={data.handleSubmit}>
          <br /><br />

          <h1 style={{"color":"green"}}> Registration </h1><br />

          <label><b>Name</b></label><br/>
          <input type="text"    name="name"     id="name"    value={data.values.name}    onChange={data.handleChange}/><br />
          {data.errors.name?<div style={{"color":"red"}}>{data.errors.name}</div>:null}

          <label><b>E-mail</b></label><br />
          <input type="email"   name="email"     id="email"  value={data.values.email}    onChange={data.handleChange}/><br />
          {data.errors.email?<div style={{"color":"red"}}>{data.errors.email}</div>:null}

          <label><b>Password</b></label><br />
          <input type="password" name="password" id="password" value={data.values.password} onChange={data.handleChange}/><br />
          {data.errors.password?<div style={{"color":"red"}}>{data.errors.password}</div>:null}

          <br />
          <button type="submit" className="btn btn-secondary" onClick={e => data.values.result=1}>Register</button><br /><br />
          {data.values.result=1 && data.values.name && data.values.email && data.values.password.length>3 ?<h3 style={{"color":"blue"}}>Register and console for result</h3>:null}
        </form>
        </div>
      </center>
    </div>
  )
}

export default App
