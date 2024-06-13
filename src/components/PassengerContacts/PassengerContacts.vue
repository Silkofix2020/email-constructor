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
    <tbody>
      <tr>
        <th
          style="
            vertical-align: middle;
            font-weight: normal;
            text-align: left;
            border: 1px solid rgb(232, 237, 241);
            border-radius: 3px;
            padding: 16px;
          "
        >
          <PassengerContactsHead />
          <PassengerContactsDetail />
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import PassengerContactsHead from "./components/PassengerContactsHead.vue";
import PassengerContactsDetail from "./components/PassengerContactsDetail.vue";
</script>

<style></style>
