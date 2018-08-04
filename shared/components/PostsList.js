import { graphql } from 'react-apollo';
import Link from 'next/link'
import gql from 'graphql-tag';
import styled from 'react-emotion'

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  vertical-align: top;
`;

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
                <Image
                  alt={`Featured image for: ${title}`}
                  src={featuredImage.sourceUrl}
                />
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