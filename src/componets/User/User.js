
const User = ({user, setAddress}) => {

    const {id, name, address: {city,street,zipcode}} = user;
    return (
        <div>
            <div>{id}. {name}</div>
            <button onClick={()=>setAddress(user)}>details</button>
        </div>
    );
};

export {User};