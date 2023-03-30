import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages';
import Category from '../pages/category/_id';
import Vod from '../pages/vod/_id';

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
      path: '/vod/:id',
      name: 'Vod',
      component: Vod
    },
  ]
})

export default router;