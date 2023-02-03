import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage/HomePage";
import {AnimalsReducer} from "./components/AnimalsReducer/AnimalsReducer";

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