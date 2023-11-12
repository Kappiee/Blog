import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';

const routers = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/about',
        name: 'About',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routers,
});

export default router;
