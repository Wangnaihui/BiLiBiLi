import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('@/views/Home.vue')
const Register = () =>
    import ('@/views/Register.vue')
const Login = () =>
    import ('@/views/Login.vue')
const Userinfo = () =>
    import ('@/views/Userinfo.vue')
const Edit = () =>
    import ('@/views/Edit.vue')
const Article = () =>
    import ('@/views/Article.vue')
const EditCategory = () =>
    import ('@/views/EditCategory.vue')


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            keepalive: true
        }

    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Userinfo',
        name: 'Userinfo',
        component: Userinfo,
        meta: {
            istoken: true
        }
    },
    {
        path: '/Edit',
        name: 'Edit',
        component: Edit,
        meta: {
            istoken: true
        }
    },
    {
        path: '/Article/:id',
        name: 'Article',
        component: Article
    },
    {
        path: '/EditCategory',
        name: 'EditCategory',
        component: EditCategory
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
        router.push('/Login')
        Vue.prototype.$msg.fail('请重新登录')
        return
    }
    next()
})
export default router