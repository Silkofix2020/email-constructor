<template>
  <div>
    <div class="constuctor-inputs">
      <label for="username">Картинка</label>
      <input
        name="username"
        type="text"
        v-model="username"
        @input="updateHtmlCode"
        @change="updateHtmlCode"
      />
      <label for="from">Откуда</label>
      <input
        name="from"
        type="text"
        v-model="from"
        @input="updateHtmlCode"
        @change="updateHtmlCode"
      />
      <label for="to">Куда</label>
      <input
        name="to"
        type="text"
        v-model="to"
        @input="updateHtmlCode"
        @change="updateHtmlCode"
      />
      <label for="count">Кол-во</label>
      <input
        name="count"
        type="text"
        v-model="count"
        @input="updateHtmlCode"
        @change="updateHtmlCode"
      />
    </div>
    <div style="display: flex; gap: 10px">
      <div class="content" ref="contentRef">
        <h1>Заголовок</h1>
        <p>Какой-то текст</p>
        <p>{{ count }}</p>
        <img :src="username" alt="" style="width: 200px" />
        <div>
          From <span style="font-weight: 700">{{ from }}</span> to
          <span>{{ to }}</span>
        </div>
        <a href="https://smflights.com/" class="" target="_blank">123</a>
      </div>
      <div class="html-code">
        <h2>HTML код:</h2>
        <pre>{{ htmlCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const contentRef = ref(null);
const htmlCode = ref("");
const username = ref(0);
const from = ref(0);
const to = ref(0);
const count = ref(0);

const updateHtmlCode = () => {
  if (contentRef.value) {
    htmlCode.value = contentRef.value.innerHTML;
  }
};

watch(
  username,
  () => {
    updateHtmlCode();
  },
  { immediate: true }
);

onMounted(() => {
  updateHtmlCode();
});
</script>

<style>
.content {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.html-code {
  width: 400px;
  background-color: #f5f5f5;
  white-space: pre-wrap;
  word-wrap: break-word; /* для переноса слов */
  overflow: auto; /* добавляем прокрутку для длинного содержимого */
  padding: 20px;
  white-space: pre-wrap;
  word-break: break-all;
}
.constuctor-inputs {
  padding: 10px 15px;
}
</style>
