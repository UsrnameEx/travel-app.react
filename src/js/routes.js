import HomePage from '../pages/home.jsx';
import PostPage from "../pages/PostPage";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/posts/:id',
        component: PostPage,
        options: {
            transition: 'f7-parallax',
        },
    }
];

export default routes;
