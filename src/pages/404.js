import React from "react"
import Layout from "./../components/layout"
import { Link } from "gatsby"
import Head from "./../components/head.js"

function NotFound() {
  return (
    <Layout>
      <Head title="Not Found" />

      <div>
        <h1>Page Not found</h1>
        <p>
          you can go to <Link to={"/"}> Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
