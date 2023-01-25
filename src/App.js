import {Users} from "./components/Users/Users";
import {UsersForm} from "./components/UsersForm/UsersForm";

const App = () => {
    return (
        <div>
            <UsersForm/>
            <hr/>
            <Users/>

        </div>
    );
};

export {App};