import HomePage from '@/pages/HomePage';
import PostPage from "@/pages/PostPage";
import ToursPage from "@/pages/ToursPage";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/posts/:postId',
        component: PostPage,
        options: {
            transition: 'f7-parallax',
        },
    },
    {
        path: '/tours',
        component: ToursPage,
        options: {
            transition: 'f7-parallax',
        },
    },
];

export default routes;
