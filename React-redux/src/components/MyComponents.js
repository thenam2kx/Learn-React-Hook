import React from "react"
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DIsplayInfor";

class MyComponents  extends React.Component {

  myInfor = ['a', 'b', 'c']

  

  state = {
    listUsers: [
      {
        id: 1,
        name: "thenam2kx",
        age: 19
      },
      {
        id: 2,
        name: "sonhai2020",
        age: 10
      },
      {
        id: 3,
        name: "ngoclinh2020",
        age: 9
      },
    ]
  }

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers]
    })
  }

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId )
    
    this.setState({
      listUsers: listUsersClone
    })
  }

  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br/>
        <br/>
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    )
  }
}
export default MyComponents
