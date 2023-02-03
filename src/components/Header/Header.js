import css from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"home"}>
                <div>Home</div>
            </NavLink>

            <NavLink to={"animals"}>
                <div>Animals</div>
            </NavLink>
        </div>
    );
};

export {Header};