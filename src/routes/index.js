import MainView from '../views/MainView.vue';
import DashBoardView from '../views/DashBoardView.vue';
import PostsView from '../views/PostsView.vue';

export default [
    { path: '/', component: MainView },
    { path: '/posts', component: PostsView },
    { path: '/dashboard', component: DashBoardView }
];
