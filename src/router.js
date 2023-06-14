import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutUs
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactUs
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'Single-Project',
            component: SingleProject
        },

    ]
});

export {router};