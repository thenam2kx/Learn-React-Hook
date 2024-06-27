import React, { useState } from "react"

const AddUserInfor = (props) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('Ha Noi')
  const [age, setAge] = useState('')

  const handleOnChange = (event) => {
    setName(event.target.value)
  }

  const handleOnChangeAge = (event) => {
    setAge(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    props.handleAddNewUser({
      id: Math.floor((Math.random()*100) + 1) + '-random' ,
      name: name,
      age: age
    })
  }

  return (
    <div>
      <p>my address is {address}</p>
      <p>my name is {name}</p>
      <p>my age is {age}</p>

      <pre/>
      <form onSubmit={ (event) => handleOnSubmit(event) }>
        <label>Fullname: </label>
        <input
          type="text"
          onChange={ (event) => {handleOnChange(event)} }  
        />

        <br/>

        <label>Age: </label>
        <input
          type="text"
          onChange={ (event) => {handleOnChangeAge(event)} }  
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserInfor;