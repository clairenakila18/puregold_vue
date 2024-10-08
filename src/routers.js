import { createRouter, createWebHistory } from 'vue-router'; // Correct method name
import SignUp from './components/SignUp.vue';  
import SignIn from './components/SignIn.vue';  
import HomePage from './components/HomePage.vue';      // Import Home component

const routes = [
    {
        name: 'SignUp',
        component: SignUp,
        path: '/'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/signin'
    },
    {
        name: 'HomePage',
        component: HomePage,
        path: '/homepage'
    }
];

const router = createRouter({
    history: createWebHistory(),  // Correct syntax and method
    routes
});

export default router;
