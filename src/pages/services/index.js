import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Img from 'gatsby-image'


function services({ data }) {

    console.log(data);

    const dataList = data.service.nodes;
    const siteList = data.contact.siteMetadata.copyright;
    return (

        <Layout>
            <section>
                <h1>Services</h1>
                <div className='service-list'>
                    {dataList.map(dList => (
                        <Link className='s-list' key={dList.id} to={`./${dList.frontmatter.slug}`} >
                          <Img fluid={dList.frontmatter.thumb.childImageSharp.fluid} />
                            <p>{dList.frontmatter.title}</p>
                            <p>{dList.frontmatter.stack}</p>
                            <p>{dList.frontmatter.slug} | {dList.id} </p>
                            <br />
                        </Link>
                    ))}
                </div>

                <p>{siteList}</p>
            </section>
        </Layout >
    )
}

export const query = graphql`
query {
  service: allMarkdownRemark(sort: {frontmatter: {place: ASC}}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb{
          childImageSharp {
            fluid {
           ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  },
 contact: site { 
      siteMetadata {
        copyright
      } 
  }
}
`

export default services  