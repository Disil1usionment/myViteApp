import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        redirect: '/Home'
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
        redirect: '/Home/Greet',
        meta: {
            namer: "Home"
        },
        children: [
            {
                path: "Greet",
                name: "greet",
                component: () => import('../views/HomePages/Greet.vue'),
                mate: {
                    name: "欢迎"
                }
            },
            {
                path: "Front",
                name: "front",
                component: () => import('../views/HomePages/Front.vue'),
                mate: {
                    name: "首页"
                }
            }, {
                path: "About",
                name: "about",
                component: () => import('../views/HomePages/About.vue'),
                mate: {
                    name: "关于"
                }
            }, {
                path: "Essay",
                name: "essay",
                component: () => import('../views/HomePages/Essay.vue'),
                mate: {
                    name: "短句"
                }
            }, {
                path: "Photo",
                name: "photo",
                component: () => import('../views/HomePages/Photo.vue'),
                mate: {
                    name: "相册"
                }
            },
            {
                path: "/:catchAll(.*)",
                name: "error",
                component: () => import('../views/HomePages/404.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;