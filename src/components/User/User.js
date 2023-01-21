const User = ({user, onSelectUser}) => {

    const {id: userId, name, username, website, email } = user;



    return (
        <div>
            <h4>{userId}. {name} | {username} </h4>
            <h5>{website} | {email}</h5>
            <button onClick={()=> onSelectUser(userId)}>see posts</button>
        </div>
    );
};

export {User};