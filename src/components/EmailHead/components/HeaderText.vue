<template>
  <p style="margin: 0px 0px 12px">
    <strong>{{ firstName }} {{ secondName }} </strong>, thank you for choosing
    Smart Flight! We got your payment and we’re now confirming your booking with
    the carrier, which usually takes around 20 minutes. We’ll send you your
    final booking confirmation with an e‑ticket as soon as possible.
  </p>
</template>

<script setup>
import { inject } from "vue";

const firstName = inject("firstName");
const secondName = inject("secondName");
</script>

<style></style>
