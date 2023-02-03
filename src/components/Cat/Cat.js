const Cat = ({cat}) => {

    const {id, name} = cat;

    return (
        <div>
            <div>
                {id}. {name}
            </div>
        </div>
    );
};

export {Cat};