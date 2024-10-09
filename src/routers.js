import { createRouter, createWebHistory } from 'vue-router'; // Correct method name
import SignUp from './components/SignUp.vue';  
import SignIn from './components/SignIn.vue';  
import HomePage from './components/HomePage.vue';      // Import Home component
//import AddStore from './components/Stores/AddStore.vue';
//import UpdateStore from './src/components/Stores/UpdateStore.vue';

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
    },
   /* {
        name: 'AddStore',
        component: AddStore,
        path: '/addstore'
    },*/
    /*
    {
        name: 'UpdateStore',
        component: UpdateStore,
        path: '/updatestore'
    }*/
];

const router = createRouter({
    history: createWebHistory(),  // Correct syntax and method
    routes
});

export default router;
