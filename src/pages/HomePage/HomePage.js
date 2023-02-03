import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <h2 className={css.h4}>Hello World</h2>
            <p className={css.p}>Create your Animal</p>
        </div>
    );
};

export {HomePage};