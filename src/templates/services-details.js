import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const serviceDetails = ({ data }) => {
    console.log(data);
    const { html } = data.markdownRemark;
    const { title, stack, featuredImg, slug } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div>
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    )
}

export default serviceDetails


export const query = graphql`query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
     
        html
        frontmatter {
          title
          slug
          stack
          featuredImg {
            childImageSharp {
              fluid {
               ...GatsbyImageSharpFluid
              }
            }
          }
        } 
    }
  }`