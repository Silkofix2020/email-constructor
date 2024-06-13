<template>
  <p
    style="margin: 0px 0px 12px"
    v-if="passengers && passengers.length > 0"
    :key="'output-1'"
  >
    Dear
    <strong
      >{{ passengers[0]?.firstName }} {{ passengers[0]?.secondName }} </strong
    >, thank you for choosing
    <a href="https://SMflights.com" target="_blank">SM Flights</a> for your
    upcoming trip! <br />
  </p>
</template>

<script setup>
import { inject } from "vue";

const passengers = inject("passengers");
</script>

<style></style>
