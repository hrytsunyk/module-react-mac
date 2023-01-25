const Post = ({post}) => {

    const {id, name} = post;
    return (
        <div>
            <div>{id}. {name}</div>
        </div>
    );
};

export {Post};