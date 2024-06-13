<template>
  <h3
    style="
      padding: 0px;
      text-align: left;
      font-weight: bold;
      color: rgb(37, 42, 49);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 20px;
      margin: 0px 0px 8px;
    "
  >
    {{ fromCity }}
    <img
      alt=""
      height="20"
      src="https://i.ibb.co/X7NZdrM/unnamed-8.png"
      width="20"
      class="CToWUd"
      data-bit="iit"
      style="border: 0px; vertical-align: top"
    />
    {{ toCity }}
    <img
      v-if="!!roundTrip"
      alt=""
      height="20"
      src="https://i.ibb.co/X7NZdrM/unnamed-8.png"
      width="20"
      class="CToWUd"
      data-bit="iit"
      style="border: 0px; vertical-align: top"
    />
    <span v-if="!!roundTrip">{{ toCity2 }}</span>
  </h3>
</template>

<script setup>
import { inject } from "vue";

const fromCity = inject("fromCity");
const toCity = inject("toCity");
const roundTrip = inject("roundTrip");
const toCity2 = inject("toCity2");
</script>

<style></style>
