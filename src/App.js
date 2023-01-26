
import {Route, Routes} from "react-router-dom";

import {AboutPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";

import {MainLayout} from "./layouts";


const App = () => {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'notfound'} element={<NotFoundPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
            </Routes>

        </div>

    );
};

export {App};