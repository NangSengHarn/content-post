import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'
import Create from '../views/Create.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
