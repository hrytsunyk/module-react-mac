import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/mainLayout";
import {HomePage, UsersPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={MainLayout}>

                    <Route index element={HomePage}/>
                    <Route path={'/'} element={UsersPage}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};