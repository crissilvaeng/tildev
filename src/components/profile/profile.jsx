// profile.jsx

import { Modal } from 'react-bootstrap'

import Login from './../login/login'
import React from 'react'
import styles from './../../style.scss'
import { connect } from 'react-redux'

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
    const style = {
      background: `url(${this.props.user.photoURL}) 50% 50% / cover no-repeat`
    }
    const icon = this.props.user.photoURL === undefined ? 'fa fa-user fa-3x fa-inverse' : ''
    return (
      <div>
        <button
          id='profile'
          className={styles.profile}
          onClick={this.open}
          style={style}
        >
          <i className={icon} aria-hidden='true' />
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login or Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login closeHandler={this.close} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Profile)
