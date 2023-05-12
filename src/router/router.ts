import Home from '../views/Home.vue';
import TaskView from '../views/TaskView.vue';
import ResumeView from '../views/ResumeView.vue';

import CreateTaskView from '../views/CreateTaskView.vue';
import ListResumeView from '../views/ListResumeView.vue';
import TableResumeView from '../views/TableResumeView.vue';
import NotFound from '../views/NotFound.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            children: [
                {
                    path: '',
                    component: TaskView,
                    name: 'task'
                },
                {
                    path: 'resume',
                    component: ResumeView,
                    name: 'resume',
                    children: [
                        {
                            path: '',
                            component: ListResumeView,
                            name: 'list'
                        },
                        {
                            path: 'table',
                            component: TableResumeView,
                            name: 'table'
                        }
                    ]
                }
            ]
        },
        {
            path: '/create',
            component: CreateTaskView,
            name: 'create'
        },
        {
            path: '/edit',
            component: CreateTaskView,
            name: 'edit'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: 'error_404'
        }
    ]
})

export default router;