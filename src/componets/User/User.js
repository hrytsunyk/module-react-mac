const User = ({user}) => {
    const {id, name, username, email, address, street, suite, city, zip,} = user;
    return (
        <div>
            <div>{id}. {name}</div>
        </div>
    );
};

export {User};