// entry.jsx

import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

import React from 'react'
import moment from 'moment'

class Entry extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.post ? props.post.title : '',
      content: props.post ? props.post.content : '',
      tags: props.post ? props.post.tags : [],
      datetime: props.post ? moment(props.post.datetime) : moment()
    }

    this.onTitleChanged = this.onTitleChanged.bind(this)
    this.onContentChanged = this.onContentChanged.bind(this)
    this.onTagsChanged = this.onTagsChanged.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onTitleChanged (event) {
    const title = event.target.value
    this.setState(() => ({ title }))
  }

  onContentChanged (event) {
    const content = event.target.value
    this.setState(() => ({ content }))
  }

  onTagsChanged (event) {
    const tags = event.target.value
    this.setState(() => ({ tags: tags.split(',') }))
  }

  onSubmit (event) {
    event.preventDefault()

    this.props.onSubmit({
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      datetime: this.state.datetime.valueOf()
    })
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId='formTitle'>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type='text'
            placeholder='Enter the title.'
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChanged}
          />
        </FormGroup>
        <FormGroup controlId='formContent'>
          <ControlLabel>Content</ControlLabel>
          <FormControl
            componentClass='textarea'
            placeholder='Enter the content.'
            value={this.state.content}
            onChange={this.onContentChanged}
          />
        </FormGroup>
        <FormGroup controlId='formTags'>
          <ControlLabel>Tags</ControlLabel>
          <FormControl
            type='text'
            placeholder='Enter some tags, separated by comma.'
            value={this.state.tags}
            onChange={this.onTagsChanged}
          />
        </FormGroup>
        <Button onClick={this.onSubmit}>Send</Button>
      </form>
    )
  }
}

export { Entry }
