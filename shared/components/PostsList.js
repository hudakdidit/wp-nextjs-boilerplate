import { graphql } from 'react-apollo';
import Link from 'next/link'
import gql from 'graphql-tag';

function PostsList({
  loading,
  data,
}) {
  if (loading) return 'loading...';
  const { nodes: posts } = data.posts ||  {};
  return (
    <section>
      {posts && posts.length > 0 && (
        <ul>
          {posts.map(({ id, slug, title, featuredImage }) => (
            <li key={id}>
              <h2>
                <Link as={`/post/${slug}`} href={`/post/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              {featuredImage && (
                <img src={featuredImage.sourceUrl} alt={`Featured image for: ${title}`} />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export const allPosts = gql`
  query {
    posts {
      nodes {
        id,
        slug,
        title,
        tags {
          edges {
            node {
              id
            }
          }
        },
        categories {
          edges {
            node {
              id
            }
          }
        },
        date,
        featuredImage {
          id,
          uri,
          slug,
          sourceUrl,
        }
      }
    }
  }
`;

export default graphql(
  allPosts,
  {
    props({ data }) {
      return {
        data,
      }
    }
  }
)(PostsList);