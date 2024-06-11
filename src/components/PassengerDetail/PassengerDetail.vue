<template>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="
      width: 100%;
      margin: 0px;
      padding: 0px;
      border-spacing: 0px;
      font-size: 14px;
      line-height: 20px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: left;
      color: rgb(37, 42, 49);
      table-layout: fixed;
    "
  >
    <PassengerDetailHead />
    <PassengerDetailBody />
  </table>
</template>

<script setup>
import PassengerDetailHead from "./components/PassengerDetailHead.vue";
import PassengerDetailBody from "./components/PassengerDetailBody.vue";
</script>

<style></style>
