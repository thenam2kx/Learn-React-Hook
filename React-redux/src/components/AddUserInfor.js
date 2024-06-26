import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: 'The Nam',
    address: 'Ha Noi',
    age: 18
  }


  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.handleAddNewUser({
      id: Math.floor((Math.random()*100) + 1) + '-random' ,
      name: this.state.name,
      age: this.state.age
    })
  }

  render () {
    return (
      <div>
        <p>my name is {this.state.name}</p>
        <p>my age is {this.state.age}</p>

        <pre/>
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <label>Fullname: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={ (event) => {this.handleOnChange(event)} }  
          />

          <br/>

          <label>Age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={ (event) => {this.handleOnChangeAge(event)} }  
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default AddUserInfor;