import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.h6Block}><h6>HOME</h6></div>
            <div className={css.h6Block}><h6>ALBUMS</h6></div>
            <div className={css.h6Block}><h6>COMMENTS</h6></div>
            <div className={css.h6Block}><h6>TODOS</h6></div>
        </div>
    );
};

export {Header};