import css from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.h6Block}>
                <Link to={'/'}><h6>HOME</h6></Link>
            </div>
            <div className={css.h6Block}>
                <Link to={'/albums'}><h6>ALBUMS</h6></Link>
            </div>
            <div className={css.h6Block}>
                <Link to={'/comments'}><h6>COMMENTS</h6></Link>
            </div>
            <div className={css.h6Block}>
                <Link to={'/todos'}><h6>TODOS</h6></Link>
            </div>
        </div>
    );
};

export {Header};