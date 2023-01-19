const Launch = ({launch}) => {

    const {
        flight_number, mission_name,
        launch_year, links: {mission_patch_small},
        details } = launch;


    return (

        <div className={'starship'}>

            <h3>{flight_number}. Name: {mission_name} | Launch year: {launch_year}</h3>

            <h4>Details: {details}</h4>

            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    );
};

export {Launch};