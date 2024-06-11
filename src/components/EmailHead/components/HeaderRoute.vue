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
    {{ from }}
    <img
      alt=""
      height="20"
      src="https://ci3.googleusercontent.com/meips/ADKq_NbDolbLwXXct4cag7iVN7QO_UeTnM92UEe5ej4wW-m2WIyzYL94mmyVcuqvkRwNSIsz-8oQJeXqD78GEhEJR5yD7NxYab9HpDO3gaGzGPJehco3TINP3t1X=s0-d-e1-ft#https://images.kiwi.com/orbit-icons/primary/32x32/flight-direct.png"
      width="20"
      class="CToWUd"
      data-bit="iit"
      style="border: 0px; vertical-align: top"
    />
    {{ to }}
  </h3>
</template>

<script setup>
import { ref, inject } from "vue";

const from = inject("from");
const to = inject("to");
</script>

<style></style>
