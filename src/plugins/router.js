import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        name: "AboutMe",
        path: "/about_me",
        component: () => import("@/components/AboutMe/AboutMe.vue")
    },
    {
        name: "RoadMap",
        path: "/road_map",
        component: () => import("@/components/RoadMap/RoadMap.vue")
    },
    {
        name: "Projects",
        path: "/projects",
        component: () => import("@/components/Projects/Projects.vue")
    },
    {
        name: "HireMe",
        path: "/hire_me",
        component: () => import("@/components/HireMe/HireMe.vue")
    },
    {
        name: "Home",
        path: "/*",
        component: () => import("@/components/Home/Home.vue")
    },



]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router