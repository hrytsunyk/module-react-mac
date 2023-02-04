import css from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={css.Home}>
            <h4 className={css.title}>Hello World</h4>
            <p className={css.text}>Create your animal</p>
        </div>
    );
};

export {HomePage};