// profile.jsx

import { Button, Modal } from 'react-bootstrap'

import { Login } from './../login'
import React from 'react'
import styles from './../../style.scss'

class Profile extends React.Component {
  constructor () {
    super()

    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }
  render () {
    return (
      <div>
        <button id='profile' className={styles.profile} onClick={this.open} />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login or Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export { Profile }
