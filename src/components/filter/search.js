import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Input } from './search.styled'

class Search extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    const value = event.target.value.toLowerCase()

    this.setState({
      value: value,
    })

    this.props.onSearch(value)
  }

  render() {
    return (
      <Input
        type="text"
        value={this.state.value}
        placeholder="Search packages ..."
        onChange={this.handleChange}
      />
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Search
