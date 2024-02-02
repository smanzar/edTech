import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/Class.vue';
import StudentClass from '../views/StudentClass.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/class', component: Class },
    { path: '/student-class', component: StudentClass },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;