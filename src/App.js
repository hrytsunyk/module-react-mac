import {CatDogReducer} from "./components/CatDogReducer";
import {FormCreator} from "./components/formCreator/formCreator";
import {Route, Routes, useNavigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CatsDogsPage} from "./pages/CatsPage/CatsDogsPage";
import {HomePage} from "./pages/HomePage/HomePage";

const App = () => {


    return (
        <Routes>
            <Route path={'/'}  element={<MainLayout/>}>

                <Route index path={'home'} element={<HomePage/>}/>
                <Route path={'cats&dogs'} element={<CatsDogsPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};