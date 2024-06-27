import React  from "react"
import './DisplayInfor.scss'
class DisplayInfor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowLisyUsers: true
    }
  }

  componentDidMount() {
    console.log('call me componentDidMount');
    setTimeout(() => {
      document.title = 'thenam2kx'
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState, snapshost) {
    console.log('call me componentDidUpdate', this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert('mme')
      }
    }
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