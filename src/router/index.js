import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages';
import Category from '../pages/category/_id';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category
    },
  ]
})

export default router;