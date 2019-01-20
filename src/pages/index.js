import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Packages from '../components/packages/list'

import packages from '../packages.json'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Packages"
      keywords={[`gatsby`, `application`, `react`, `npm`]}
    />
    <Packages packages={packages} edges={data.allNpmPackages.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allNpmPackages {
      edges {
        node {
          id
          analyzedAt
          collected {
            metadata {
              name
              version
              date
              license
              links {
                npm
              }
            }
            npm {
              downloads {
                from
                to
                count
              }
            }
          }
        }
      }
    }
  }
`
