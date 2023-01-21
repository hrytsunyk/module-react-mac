
const Posts = ({posts}) => {
const {id, userID, title} = posts;
    return (
        <div>
            <h6>{id}. {title}</h6>
        </div>
    );
};

export {Posts};