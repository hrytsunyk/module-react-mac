const Cat = ({cat, dispatch}) => {

    const {id, name} = cat;

    return (
        <div>
            <div>

                <div>{id}. {name}</div>

                <button onClick={()=>
                    dispatch({type:"DELETE_CAT", payload:id})
                }>delete</button>

            </div>
        </div>
    );
};

export {Cat};