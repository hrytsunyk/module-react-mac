import css from './Header.module.css';

import {NavLink} from "react-router-dom";



const Header = () => {

    return (
        <div className={css.Header}>

            <div className={css.h6Block}>
                <NavLink to={''}><h6>HOME</h6></NavLink>
            </div>

            <div className={css.h6Block}>
                <NavLink to={'albums'}><h6>ALBUMS</h6></NavLink>
            </div>

            <div className={css.h6Block}>
                <NavLink to={'comments'}><h6>COMMENTS</h6></NavLink>
            </div>

            <div className={css.h6Block}>
                <NavLink to={'todos'}><h6>TODOS</h6></NavLink>
            </div>

        </div>
    );
};

export {Header};