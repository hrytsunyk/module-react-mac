import {Route, Routes} from "react-router-dom";

import {
    AlbumsPage, CommentsPage, HomePage,
    NotFoundPage, PostDetailsPage, TodosPage
} from "./pages";

import {MainLayout} from "./layouts";


const App = () => {

    return (

        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>

                    <Route path={'albums'} element={<AlbumsPage/>}/>

                    <Route path={'todos'} element={<TodosPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                    <Route path={'notfound'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>

    );
};

export {App};