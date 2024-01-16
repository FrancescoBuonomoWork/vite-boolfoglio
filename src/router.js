import { createRouter, createWebHistory} from  'vue-router';

import HomePage from './pages/HomePage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import NotFound from './pages/NotFound.vue';

import ProjectIndex from './pages/projects/index.vue';
import ProjectShow from './pages/projects/show.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            props: true,
            component: ProjectShow
        },
        {
            path:'/:pathMatch(.*)*',
            name:'not-found',
            component: NotFound
        }
    ]
});
export { router };