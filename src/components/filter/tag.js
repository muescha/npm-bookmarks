import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TagItem, Button } from './tag.styled'

class Tag extends Component {
  state = {
    active: false,
  }

  handleTagClick = tag => {
    const active = this.state.active

    this.setState({
      active: !active,
    })

    this.props.onTagClick(tag)
  }

  render() {
    const { tag } = this.props

    return (
      <TagItem onClick={() => this.handleTagClick(tag)}>
        <Button active={this.state.active}>{tag}</Button>
      </TagItem>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
}

export default Tag
