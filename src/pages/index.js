import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'


export default function Home({ data }) {
  console.log(data);
  const { description, title, copyright } = data.contact.siteMetadata;

  //  const {description, title} = data.contact.site.siteMetadata;
  return (
    <Layout>
      <section className={styles.header}>
        <h1>GREATEST SECURITY SERVICES </h1>
        {/* <img src="./goat.png" alt="hello"></img> */}

        <Img fluid={data.listImages.childImageSharp.fluid} />

      </section>
      <p>{copyright}</p>
    </Layout>
  )
}

export const query = graphql`
query siteInfo{
 contact: site {
    siteMetadata {
      copyright
      description
      title
    }
  },
  listImages:  file(relativePath: {eq: "goat.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
