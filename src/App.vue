<template>
  <div id="app">
    <nav>
      <!-- Ссылки для навигации -->
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О нас</router-link>
    </nav>
    <!-- Отображение текущей страницы -->
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
