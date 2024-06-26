import React from "react";

class UserInfor extends React.Component {
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <p>my name is {this.state.name}</p>
        <pre/>
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <label>Fullname</label>
          <input
            type="text"
            value={this.state.name}
            onChange={ (event) => {this.handleOnChange(event)} }  
          />

          <br/>

          <label>Age</label>
          <input
            type="text"
            value={this.state.age}
            onChange={ (event) => {this.handleOnChange(event)} }  
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default UserInfor;