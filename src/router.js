import vueRouter from 'vue-router'

import UserRegister from './components/UserRegister'
import UserAuth from './components/UserAuth'
import User from './components/User'
import UserBudget from './components/UserBudget'
import UserMovement from './components/UserMovement'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes : [
        {
            path: '/',
            name: "root",
            component: App,
            //redirect: '/login'
        },
        {
            path: '/user/register',
            name: "user_register",
            component: UserRegister
        },
        {
            path: '/user/auth',
            name: "user_auth",
            component: UserAuth
        },
        {
            //path: '/welcome/:username',
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            //path: '/budget/:username',
            path: '/user/budget/:username',
            name: "user_budget",
            component: UserBudget
        },
        {
            //path: '/new_movement/:username',
            path: '/user/movement/:username',
            name: "user_movement",
            component: UserMovement
        }
    ]
})
export default router
