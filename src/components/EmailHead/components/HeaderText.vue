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
    upcoming trip. <br /><br /><strong>Ready to book?</strong> Reply to this
    email with your preferred flight option, and we'll call you to handle the
    booking process.
    <br />
    <strong>Want more options?</strong> Let us know your preferences (price
    range, travel time, etc.), and we can find additional flights that suit your
    needs. <br />
    <strong>Have questions?</strong> Don't hesitate to reply to this email, and
    our team will be happy to assist you.
  </p>
</template>

<script setup>
import { inject } from "vue";

const passengers = inject("passengers");
</script>

<style></style>
