import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'

const NodeDefault = ({ data }) => {
  const node = data.nodeArticle
  return (
    <Layout>
      <h2>{node.title}</h2>
      <div dangerouslySetInnerHTML={{__html: node.body.value}} />
    </Layout>
  )
}

export const query = graphql`
  query($nodeId: Int!){
    nodeArticle(drupal_internal__nid: {eq: $nodeId}) {
      drupal_internal__nid
      title
      body {
        value
      }
    }
  }
`

export default NodeDefault



