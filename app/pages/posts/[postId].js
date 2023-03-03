function Post({ data }) {
  return (
    <>
      <h1>single Post</h1>

      <h2>
        {data.id} {data.title}
      </h2>
      <p>{data.body}</p>
    </>
  );
}
export default Post;

// export async function  getStaticPaths() {
//    return{
//     paths:[
//         {
//             params:{postId:"1"}
//         },
//         {
//             params:{postId:"2"}
//         },
//         {
//             params:{postId:"3"}
//         }
//     ],
//     fallback : false,
    
//    }
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   );
//   const data = await response.json();
//   // console.log(data)

//   return {
//     props: {
//       post: data,
//     },
//   };
// }



export async function getStaticPaths() {
    // Fetch all data from your API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
  
    // Map the data to an array of paths with the `id` parameter
    const paths = data.map(item => ({
      params: { postId: item.id.toString() },
    }));
  
    // Return the paths and fallback value
    return { paths, fallback: false };
  }
  
  export async function getStaticProps( context ) {
    // Fetch the data for the specified ID
    const {params} =context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
  
    // Return the data as props
    return { props: { data } };
  }
  