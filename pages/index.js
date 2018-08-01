import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { generateApiUrl } from '../utils';

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Hallo</h1>
      {posts.map(({ title, slug }) => (
        <div key={slug}>
          <Link as={`/post/${slug}`} href={`/post/${slug}`}>{title.rendered}</Link>
        </div>
      ))}
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch(generateApiUrl('posts'));
  const posts = await res.json();

  return {
    posts,
  }
}

export default Index;