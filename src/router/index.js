import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import( 'views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
