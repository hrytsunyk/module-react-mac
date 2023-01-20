const UserAddress = ({user}) => {
    const {address:{city, street, zipcode}} = user;
    return (
        <div>
            <h5>City:{city}</h5>

            <h5>Street:{street}</h5>

            <h5>Zipcode:{zipcode}</h5>
        </div>
    );
};

export {UserAddress};
