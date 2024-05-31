<template>
  <div>https://lk.seven-sky.net/images/pay-system/sber.jpg</div>
  <div>
    <button class="somebtn">ororororroro</button>
    <div class="constuctor-inputs">
      <div class="constuctor-inputs__group">
        <label for="username">Картинка</label>
        <input name="username" type="text" v-model="username" />
      </div>
      <div class="constuctor-inputs__group">
        <label for="from">Откуда</label>
        <input name="from" type="text" v-model="from" />
      </div>
      <div class="constuctor-inputs__group">
        <label for="to">Куда</label>
        <input name="to" type="text" v-model="to" />
      </div>
      <div class="constuctor-inputs__group">
        <label for="count">Кол-во</label>
        <input name="count" type="text" v-model="count" />
      </div>
      <div class="constuctor-inputs__group">
        <label for="option">Какая-то херь</label>
        <select v-model="option" name="option">
          <option value="some-text 1">some-text 1</option>
          <option value="some-text 2">some-text 2</option>
          <option value="some-text 3">some-text 3</option>
        </select>
      </div>
      <div class="constuctor-inputs__group">
        <label for="payment-link">Payment link</label>
        <input name="payment-link" type="text" v-model="paymentLink" />
      </div>
    </div>
    <EmailPreview
      :username="username"
      :from="from"
      :to="to"
      :count="count"
      :option="option"
      :paymentLink="paymentLink"
      @update-html-code="updateHtmlCode"
    />
    <div class="html-code">
      <h2>HTML код:</h2>
      <pre><code>{{ htmlCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import EmailPreview from "./EmailPreview.vue";

const htmlCode = ref("");
const username = ref("");
const from = ref("");
const to = ref("");
const count = ref("");
const option = ref("");
const paymentLink = ref("");

const updateHtmlCode = (code) => {
  htmlCode.value = code;
};
</script>

<style>
.somebtn {
  background-color: #179c7f;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.somebtn:hover {
  background-color: #15e0b4;
}
.content {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.constuctor-inputs {
  display: flex;
  gap: 10px;
}
.constuctor-inputs__group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
}
.html-code {
  width: 600px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
  overflow: auto;
  white-space: pre-wrap;
  box-sizing: border-box; /* Включает padding и border в общую ширину */
}

.html-code pre {
  white-space: pre-wrap; /* Обеспечивает перенос строк */
  word-wrap: break-word; /* Переносит длинные слова */
}

.html-code code {
  display: block;
}
.constuctor-inputs {
  padding: 10px 15px;
}
</style>
