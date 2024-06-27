import React, { useState, useEffect }  from "react"
import './DisplayInfor.scss'

const DisplayInfor = (props) => {

  const [isShowHideListUser, setShowHideListUser] = useState(true)

  const { listUsers } = props

  const hadleShowHideListuser = () => {
    setShowHideListUser(!isShowHideListUser)
  }

  useEffect(() => {
    if(listUsers.length === 0) {
      alert('llll')
    }
    console.log('call useEffect');
  }, [listUsers])

  return (
    <div className="display-infor-container">
      {
        console.log('call render')
      }
      <div>
        <span onClick={() => hadleShowHideListuser()}>
          {
            isShowHideListUser === true ? 'Hide list user' : 'Show list user'
          }
        </span>
      </div>

      { 
        isShowHideListUser && 
          <div>
            {
              listUsers.map((user) => {
                return (
                  <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                    <div>my name is {user.name} </div>
                    <div>my age is {user.age} </div>
                    <div>
                      <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                    </div>
                    <hr/>
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}


export default DisplayInfor