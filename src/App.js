
import css from "./App.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";
import {RequireAuth} from "./layouts/requireAuth";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>

                <Route element={<RequireAuth/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    )
};

export {App};