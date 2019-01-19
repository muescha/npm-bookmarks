import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TagList } from './tags.styled'
import Tag from './tag'

class Tags extends Component {
  handleClick = tag => {
    this.props.onTagClick(tag)
  }

  render() {
    const { tags } = this.props

    return (
      <TagList>
        {tags.map((tag, i) => {
          return <Tag tag={tag} key={i} onTagClick={this.handleClick} />
        })}
      </TagList>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  onTagClick: PropTypes.func.isRequired,
}

export default Tags
