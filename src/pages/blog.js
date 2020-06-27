import React from "react"
import Layout from "./../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "./blog.module.scss"
import Head from "./../components/head.js"

function Blog() {
  //   //getting data from static markdown files
  //   let data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark{
  //       edges{
  //         node{
  //           frontmatter{
  //             title
  //             slug
  //             date

  //           }
  //           html
  //           excerpt
  //           fields{
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  //getting data from contenful
  let data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `)

  console.log(data)
  var posts = data.allContentfulBlogPost.edges.map(x => {
    return (
      <li>
        <Link to={`/blog/${x.node.slug}`}>
          <h3>{x.node.title}</h3>
          <p>{x.node.date}</p>
        </Link>
      </li>
    )
  })
  return (
    <div>
      <Layout>
        <Head title="Blogs" />

        <h1>my blog</h1>
        <p>this is my blog</p>
        <ul className={styles.list}>{posts}</ul>
      </Layout>
    </div>
  )
}

export default Blog
