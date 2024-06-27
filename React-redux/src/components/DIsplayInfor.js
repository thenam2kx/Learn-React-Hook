import React, { useState }  from "react"
import './DisplayInfor.scss'
// class DisplayInfor extends React.Component {

//   render () {
    
//     const { listUsers } = this.props

//     return (
//       <div className="display-infor-container">
//         { 
//           true && 
//             <div>
//               {
//                 listUsers.map((user) => {
//                   return (
//                     <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                       <div>my name is {user.name} </div>
//                       <div>my age is {user.age} </div>
//                       <div>
//                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                       </div>

//                       <hr/>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//         }
//       </div>
//     )
//   }
// }

const DisplayInfor = (props) => {

  const [isShowHideListUser, setShowHideListUser] = useState(true)

  const { listUsers } = props

  const hadleShowHideListuser = () => {
    setShowHideListUser(!isShowHideListUser)
  }

  return (
    <div className="display-infor-container">
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