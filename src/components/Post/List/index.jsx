import PostItem from "../Item";

function PostList({posts}) {
  return (
    <>
      <div className="c-listpost">
        {posts && posts.map((post) => {
          if (post.status === 'publish' && post.type === 'post') {
            return <PostItem key={post.id} {...post} />
          }}
        )}
      </div>
    </>
  );
}

export default PostList;