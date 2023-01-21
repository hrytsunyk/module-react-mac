const User = ({user, setPosts,posts}) => {

    const {id, name, username, website, email } = user;

    return (
        <div>
            <h4>{id}. {name} | {username} </h4>
            <h5>{website} | {email}</h5>
            <button onClick={()=> setPosts(id)}>see posts</button>
        </div>
    );
};

export {User};