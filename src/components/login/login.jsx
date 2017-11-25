// login.jsx

import { Button } from 'react-bootstrap'
import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <Button>
        <i className='fa fa-github fa-lg' /> Login with Github
      </Button>
    )
  }
}

export { Login }
