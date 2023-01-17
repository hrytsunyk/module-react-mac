const Simpson = ({simpson}) => {
    let {id, name, surname, age, gender, img, description} = simpson;

    return (

        <div className={'simpson'}>
            <div className={'name-surname-gender-age'}>
                <h2>{id}.Name: {name} | Surname {surname}</h2>
                <h3>Gender: {gender} | Age: {age}</h3>
            </div>
            <div className={'img'}>
                <img src={img} alt={name}/>
            </div>
            <div className={'desc'}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export {Simpson};