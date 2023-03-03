function Data({users}){
    return(
        <>
        <h1>Data</h1>
        {users.map(user => {
          return(
            <div key={user.id}>
               <div>{user.name}</div>
            </div>
          )
        })}
        </>

    )
}
export default Data

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await response.json()
    // console.log(data)

    return {
        props:{
            users:data,
        },
    }
}