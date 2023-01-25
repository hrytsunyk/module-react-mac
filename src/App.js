import {Albums, Header} from "./components";

import css from "./App.module.css"
import {Body} from "./components/Body/Body";

const App = () => {
    return (
        <div className={css.bodyClone}>
            <Header/>
            <Body/>
        </div>
    );
};

export {App};