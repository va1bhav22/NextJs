import Link from "next/link";

function PostLists({ posts }) {
  return (
    <>
      <h1>PostLists</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              {" "}
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default PostLists;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data)

  return {
    props: {
      posts: data
    },
  };
}
