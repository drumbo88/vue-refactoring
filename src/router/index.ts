import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/',
        name: 'services',
        component: ServiceView,
    },
    {
        path: '/',
        name: 'contact',
        component: ContactView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router