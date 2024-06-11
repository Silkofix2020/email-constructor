<template>
  <div>{{ userName }}</div>
</template>

<script setup>
import { ref, inject } from "vue";

const userName = inject("key");
</script>

<style></style>
