import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Styles from "./header.module.css"

const Header = () => {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  console.log(data)
  return (
    <header className={Styles.header}>
      <h1>
        <Link className={Styles.title} to="/">
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <p>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={Styles.navList}>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
