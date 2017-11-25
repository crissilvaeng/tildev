// post.jsx

import { Entry } from './../entry'
import { Modal } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { startAddPost } from './../../actions/posts'
import styles from './../../style.scss'

class Post extends React.Component {
  constructor () {
    super()

    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  open () { this.setState({ showModal: true }) }
  close () { this.setState({ showModal: false }) }

  onSubmit (post) {
    this.setState({ showModal: false })
    this.props.startAddPost(post)
  }

  render () {
    return (
      <div>
        <button id='post' onClick={this.open} className={styles.post}>
          <i className='fa fa-pencil fa-3x fa-inverse' aria-hidden='true' />
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Did you learn something today?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Entry onSubmit={this.onSubmit} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(Post)
