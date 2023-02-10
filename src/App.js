import {CarForm, Cars} from "./components";

import css from "./App.module.css";
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, LoginPage} from "./pages";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";

const App = () => {

return(
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'register'} element={<RegisterPage/>}/>
        </Route>
    </Routes>
)
};

export {App};