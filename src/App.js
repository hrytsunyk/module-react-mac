import {Navigate, Route, Routes} from "react-router-dom";


import {AnimalsReducer} from "./components";
import {MainLayout} from "./layouts";
import {HomePage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<MainLayout/>}>

                    <Route index element={<Navigate to={'home'}/>} />
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'animals'} element={<AnimalsReducer/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};