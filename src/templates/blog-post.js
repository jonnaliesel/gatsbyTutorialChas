import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function PostTemplate({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
            <SEO title={post.frontmatter.title} />
            <section>
                <h1>{post.frontmatter.title}</h1>
                <h4>
                    Posted by: {post.frontmatter.author} on {post.frontmatter.date}
                </h4>
                <article>{ post.excerpt }</article>
                <hr />
                <Link to="/blog">Go Back</Link>
            </section>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                path
                title
                author
                date
            }
            excerpt
        }
    }
`