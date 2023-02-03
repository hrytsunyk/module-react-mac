import {Navigate, Route, Routes} from "react-router-dom";


import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage/HomePage";
import {AnimalsPage} from "./pages/AnimalsPage/AnimalsPage";

const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cats&dogs'} element={<AnimalsPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};