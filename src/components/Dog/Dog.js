const Dog = ({dog}) => {

    const {id, name} = dog;

    return (
        <div>
                {id}. {name}
        </div>
    );
};

export {Dog};