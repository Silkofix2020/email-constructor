<template>
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
          :href="paymentLink"
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
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";

const emit = defineEmits(["update-html-code"]);

const props = defineProps({
  username: String,
  from: String,
  to: String,
  count: String,
  option: String,
  paymentLink: String,
});
const contentRef = ref(null);

const updateHtmlCode = () => {
  if (contentRef.value) {
    emit("update-html-code", contentRef.value.innerHTML);
  }
};

watch(
  () => [
    props.username,
    props.from,
    props.to,
    props.count,
    props.option,
    props.paymentLink,
  ],
  (newValues, oldValues) => {
    updateHtmlCode();
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  updateHtmlCode();
});
</script>
<style></style>
