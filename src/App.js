import {Navigate, Route, Routes} from "react-router-dom";


import {MainLayout} from "./layouts";
import {AnimalsPage, HomePage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<MainLayout/>}>

                    <Route index element={<Navigate to={'home'}/>} />
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'animals'} element={<AnimalsPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};