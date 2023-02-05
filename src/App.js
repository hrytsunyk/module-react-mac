import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<Navigate to={"home"}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>}/>
                    <Route path={'*'} element={<UsersPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};