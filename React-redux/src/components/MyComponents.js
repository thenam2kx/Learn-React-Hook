import React from "react"

class MyComponents  extends React.Component {

  state = {
    name: 'The Nam',
    address: 'Ha Noi',
    age: 18
  }

  handleClick (event) {
    console.log('My name is: ', this.state.name);

    this.setState({
      name: 'thenam2kx',
      age: 20
    })
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

  render() {
    return (
      <div>
        <p>my name is {this.state.name}</p>
        <button onClick={ (event) => {this.handleClick(event)} }>Click me</button>
      
        <pre/>

        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <input
            type="text"
            value={this.state.name}
            onChange={ (event) => {this.handleOnChange(event)} }  
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default MyComponents
