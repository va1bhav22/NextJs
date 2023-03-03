function User({user}) {
    return(
        <>
        <div  className="text-3xl font-bold underline">{user.name}</div>
        <div >{user.email}</div>
        </>
    )
}

export default User