
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AnimalsPage} from "./pages/AnimalsPage/AnimalsPage";
import {HomePage} from "./pages/HomePage/HomePage";

const App = () => {


    return (
        <Routes>
            <Route path={'/'}  element={<MainLayout/>}>

                <Route index path={'home'} element={<HomePage/>}/>
                <Route path={'cats&dogs'} element={<AnimalsPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};