import React  from "react"
import './DisplayInfor.scss'
class DisplayInfor extends React.Component {

  state = {
    isShowLisyUsers: true
  }

  handleShowHide = () => {
    this.setState({
      isShowLisyUsers: !this.state.isShowLisyUsers
    })
  }

  render () {
    
    const { listUsers } = this.props

    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => { this.handleShowHide() }}>
            {
              this.state.isShowLisyUsers ?
              'Hide list users' :
              'Show list users'
            }
          </span>
        </div>

        { 
          this.state.isShowLisyUsers && 
            <div>
              {
                listUsers.map((user) => {
                  return (
                    <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                      <div>my name is {user.name} </div>
                      <div>my age is {user.age} </div>
                      <div>
                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}
export default DisplayInfor