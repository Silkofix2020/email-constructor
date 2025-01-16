// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"; // Главная страница
import SearchPage from "../views/SearchPage.vue"; // Страница "О нас"

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "about", component: SearchPage },
];

const router = createRouter({
  history: createWebHistory(), // Используется HTML5 History API
  routes,
});

export default router;
