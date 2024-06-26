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


  render() {
    return (
      <div>
        <p>my name is {this.state.name}</p>
        <button onClick={ (event) => {this.handleClick(event)} }>Click me</button>
      </div>
    )
  }
}
export default MyComponents
