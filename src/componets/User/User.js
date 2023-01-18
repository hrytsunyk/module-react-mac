const User = ({user, setUserAddress}) => {
    const {id, name, username, email, address:{zipcode,  street, suite, city}} = user;
    return (
        <div>
            <div>
                {id}. {name}

            </div>
                <button onClick={setUserAddress(user.address)}>get address</button>
        </div>
    );
};

export {User};