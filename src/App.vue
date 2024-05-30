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
      <select v-model="option" name="option">
        <option value="some-text 1">some-text 1</option>
        <option value="some-text 2">some-text 2</option>
        <option value="some-text 3">some-text 3</option>
      </select>
    </div>
    <div style="display: flex; gap: 10px">
      <div class="content" ref="contentRef">
        <h1>Заголовок</h1>
        <p>Какой-то текст</p>
        <p>{{ count }}</p>
        <img :src="username" alt="" style="width: 200px; border-radius: 10px" />
        <h1>{{ option }}</h1>
        <div>
          From <span style="font-weight: 700">{{ from }}</span> to
          <span>{{ to }}</span>
        </div>
        <div>
          <a
            href="https://smflights.com/"
            style="
              display: inline-block;
              padding: 10px 20px;
              background-color: #000;
              border-radius: 10px;
            "
            target="_blank"
            >Pay booking</a
          >
        </div>
      </div>
      <div class="html-code">
        <h2>HTML код:</h2>
        <pre><code>{{ htmlCode }}</code></pre>
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
const option = ref(0);

const updateHtmlCode = () => {
  if (contentRef.value) {
    htmlCode.value = contentRef.value.innerHTML;
  }
};

watch(
  [username, from, to, count, option],
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
