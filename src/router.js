import vueRouter from 'vue-router'
import register from './components/Register'
import startSesion from './components/StartSesion'
import startComponent from './components/StartComponent'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes : [
        {
            path: '/',
            name: "root",
            component:App,
            redirect: '/startSesion'
        },
        {
            path: '/register',
            name: "register",
            component: register
        },
        {
            path: '/startSesion',
            name: "startSesion",
            component: startSesion
        },
        {
            path: '/startComponent',
            name: "startComponent",
            component: startComponent
        },
    ]
})
export default router
