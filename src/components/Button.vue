<template>
  <p style="margin: 12px 0 12px; text-align: center">
    <a
      :href="paymentLink"
      style="
        background-color: #00a991;
        border: 1px solid #00a991;
        border-radius: 3px;
        color: #ffffff;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        padding-left: 12px;
        padding-right: 12px;
      "
      target="_blank"
    >
      <slot />
    </a>
  </p>
</template>

<script setup>
import { inject } from "vue";

const paymentLink = inject("paymentLink");
</script>

<style></style>
