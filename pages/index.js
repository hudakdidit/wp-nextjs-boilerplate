import PostsList from '~/shared/components/PostsList';


export default ({ posts = [] }) => {
  return (
    <div>
      <PostsList />
    </div>
  )
};