import {CarForm, Cars} from "./components";

const App = () => {
    return (
        <div className={'father'}>
            <CarForm/>
            <hr/>
            <Cars />
        </div>
    );
};

export {App};