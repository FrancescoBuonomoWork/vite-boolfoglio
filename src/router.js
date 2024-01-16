import { createRouter, createWebHistory} from  'vue-router';

import HomePage from './pages/HomePage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import ProjectIndex from './pages/projects/index.vue';

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
    ]
});
export { router };