import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { PackageList } from './list.styled'
import Search from '../filter/search'
import Tags from '../filter/tags'
import Package from './item'

class List extends Component {
  state = {
    search: '',
    packages: new Set(),
  }

  handleTagClick = tag => {
    if (this.state.packages.has(tag)) {
      this.setState(({ packages }) => {
        const newPackages = new Set(packages)
        newPackages.delete(tag)

        return {
          packages: newPackages,
        }
      })
    } else {
      this.setState(({ packages }) => ({
        packages: new Set(packages.add(tag)),
      }))
    }
  }

  handleSearch = value => {
    this.setState({
      search: value,
    })
  }

  render() {
    const { packages, edges } = this.props
    const allTags = _.reduce(packages, (result = [], value) => {
      return _.union(result, value.tags)
    })

    return (
      <>
        <Tags tags={allTags} onTagClick={this.handleTagClick} />
        <Search onSearch={this.handleSearch} />
        <PackageList>
          {edges.map(({ node }, i, edges) => {
            if (edges.length - 1 === i) return false

            const name = node.collected.metadata.name
            const tags = _.map(packages[name])[0]
            const show =
              (this.state.search === '' || name.includes(this.state.search)) &&
              (this.state.packages.size === 0 ||
                _.intersection(Array.from(this.state.packages), tags).length >
                  0)

            return <Package key={node.id} node={node} tags={tags} show={show} />
          })}
        </PackageList>
      </>
    )
  }
}

List.propTypes = {
  packages: PropTypes.object.isRequired,
  edges: PropTypes.array.isRequired,
}

export default List
