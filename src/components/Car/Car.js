const Car = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div className={'car'}>
            <div><b>id:</b> {id}</div>
            <div><b>brand:</b> {brand}</div>
            <div><b>price:</b> {price}</div>
            <div><b>year:</b> {year}</div>
        </div>
    );
};

export {Car};