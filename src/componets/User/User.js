
const User = ({user, setAddress}) => {

    const {id, name} = user;

    return (
        <div>
            <div>{id}. {name}</div>
            <button onClick={()=>setAddress(user)}>details</button>
        </div>
    );
};

export {User};