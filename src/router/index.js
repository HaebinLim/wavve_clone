import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages';
import Category from '../pages/category/_id';
import Details from '../pages/details/_id';

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
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
  ]
})

export default router;