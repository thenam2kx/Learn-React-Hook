import React, { useState } from "react"
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DIsplayInfor";

const MyComponents = () => {

  const [listUsers, setListUsers] = useState([
    { id: 1, name: "thenam2kx", age: 19 },
    { id: 2, name: "sonhai2020", age: 10 },
    { id: 3, name: "ngoclinh2020", age: 9 },
  ])

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers])
  }

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId)
    setListUsers(listUsersClone)
  }

  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfor
        listUsers={listUsers}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  )
}

  export default MyComponents
