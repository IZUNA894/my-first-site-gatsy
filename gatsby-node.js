const path = require("path")

//this function is used when we are getting data from md files.
// module.exports.onCreateNode = ({node,actions}) => {
//     const {createNodeField } = actions
//     if(node.internal.type === 'MarkdownRemark'){
//        const slug =  path.basename(node.fileAbsolutePath,'.md')
//        createNodeField({
//            node,
//            name:'slug',
//            value:slug
//        })
//     }
// }

//used when we r getting data from md.
// module.exports.createPages = async ({graphql,actions})=>{
//     const {createPage} = actions;
//     const blogTemplate = path.resolve('./src/template/blog.js');

//     const res = await graphql(`
//     query  {
//         allMarkdownRemark {
//           edges {
//             node {

//               fields{
//                 slug
//               }
//             }
//           }
//         }
//       }

//     `);

//     res.data.allMarkdownRemark.edges.forEach((edge)=>{
//         createPage ({
//             component:blogTemplate,
//             context:{
//                 slug:edge.node.fields.slug
//             },
//             path:`/blog/${edge.node.fields.slug}`
//         })
//     })

// }

//when we are getting data from contenful
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/template/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      context: {
        slug: edge.node.slug
      },
      path: `/blog/${edge.node.slug}`
    })
  })
}
