import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/AttendanceVersionOne')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('@/components/PreView.vue')
  },
  {
    path: '/previewTwo',
    name: 'previewTwo',
    component: () => import('@/components/PreViewTwo.vue')
  },
  {
    path: '/attendanceChange',
    name: 'attendanceChange',
    component: () => import('@/views/AttendanceVersionTwo')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
