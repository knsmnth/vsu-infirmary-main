import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "signin",
            component: () => import("../views/SigninView.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () => import("../views/CalendarView.vue"),
        },
        {
            path: "/records",
            name: "records",
            component: () => import("../views/RecordsView.vue"),
        },
    ],
});

export default router;
