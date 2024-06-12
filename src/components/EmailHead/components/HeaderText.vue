<template>
  <p
    style="margin: 0px 0px 12px"
    v-if="passengers && passengers.length > 0"
    :key="'output-1'"
  >
    <strong
      >{{ passengers[0]?.firstName }} {{ passengers[0]?.secondName }} </strong
    >, thank you for choosing Smart Flight! We got your payment and we’re now
    confirming your booking with the carrier, which usually takes around 20
    minutes. We’ll send you your final booking confirmation with an e‑ticket as
    soon as possible.
  </p>
</template>

<script setup>
import { inject } from "vue";

const passengers = inject("passengers");
</script>

<style></style>
