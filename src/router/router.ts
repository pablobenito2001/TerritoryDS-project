import Home from '../views/Home/Home.vue';
import Task from '../views/Task/Task.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: Home,
            path: '/'
        },
        {
            component: Task,
            path: '/tasks'
        },
        {
            component: () => import('@/views/Captains/Captains.vue'),
            path: '/captains'
        },
        {
            component: () => import('@/views/Create/Create.vue'),
            path: '/create'
        },
        {
            component: () => import('@/views/Map/Map.vue'),
            path: '/map'
        }
    ]
})

export default router;