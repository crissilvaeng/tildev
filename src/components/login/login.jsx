// login.jsx

import { Button } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { startSignIn, startSignOut } from './../../actions/auth'

// export const Login = ({ startSignIn, startSignOut, closeHandler }) => (
//   <div>
//     <Button onClick={startSignIn}>
//       <i className='fa fa-github fa-lg' /> Login with Github
//     </Button>
//     <Button onClick={startSignOut}>
//       Logout
//     </Button>
//   </div>
// )

class Login extends React.Component {
  render () {
    return (
      <div>
        <Button onClick={e => {
          this.props.startSignIn()
          this.props.closeHandler()
        }}>
          <i className='fa fa-github fa-lg' /> Login with Github
        </Button>
        <Button onClick={e => {
          this.props.startSignOut()
          this.props.closeHandler()
        }}>
          Logout
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSignIn: () => dispatch(startSignIn()),
  startSignOut: () => dispatch(startSignOut())
})

export default connect(undefined, mapDispatchToProps)(Login)
