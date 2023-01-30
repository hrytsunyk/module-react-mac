import {User} from "../../components/User/User";
import {GetUser} from "../../components/GetUser/GetUser";
import {Inputs} from "../../components/Inputs";

const UsersPage = () => {
    return (
        <div>
            <Inputs />
            <GetUser/>
        </div>
    );
};

export {UsersPage};