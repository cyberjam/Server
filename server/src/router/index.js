import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AttendanceVersionOne"),
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("@/components/PreView.vue"),
  },
  {
    path: "/fileUploadOnCanvas",
    name: "fileUploadOnCanvas",
    component: () => import("@/components/FileUploadOnCanvas.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
