import {Albums, Header} from "./components";

import css from "./App.module.css"
import {Route, Routes} from "react-router-dom";

import {AboutPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";

const App = () => {
    return (

        <div>

            <Header/>

            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'notfound'} element={<NotFoundPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
            </Routes>

        </div>

    );
};

export {App};