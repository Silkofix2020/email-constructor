<template>
  <div class="content" ref="contentRef">
    <div class="container">
      <div
        style="
          width: 100%;
          margin: 0px;
          padding: 0px;
          font-size: 14px;
          line-height: 20px;
          font-family: Arial, Helvetica, sans-serif;
          color: rgb(37, 42, 49);
          background: rgb(255, 255, 255);
        "
      >
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
            background: rgb(245, 247, 249);
          "
        >
          <tbody>
            <tr>
              <th
                align="center"
                style="
                  vertical-align: middle;
                  font-weight: normal;
                  text-align: center;
                "
              >
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="640"
                  style="
                    padding: 0px;
                    border-spacing: 0px;
                    font-size: 14px;
                    line-height: 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    text-align: left;
                    color: rgb(37, 42, 49);
                    table-layout: fixed;
                    margin: 0px auto;
                    width: 640px;
                  "
                >
                  <tbody>
                    <tr>
                      <th
                        style="
                          vertical-align: middle;
                          font-weight: normal;
                          text-align: left;
                        "
                      >
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
                                  border-radius: 3px 3px 0px 0px;
                                  background: rgb(255, 255, 255);
                                  padding: 40px 32px 12px;
                                "
                              >
                                <EmailHead />
                                <PassengerDetail />
                                <HeaderRoute />
                                <RouteDetail />
                                <PassengerContacts />
                              </th>
                            </tr>
                          </tbody>
                        </table>
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
                                  border-width: 0px 1px 1px;
                                  border-style: solid;
                                  border-color: rgb(232, 237, 241);
                                  border-image: initial;
                                  border-radius: 0px 0px 3px 3px;
                                  background: rgb(255, 255, 255);
                                  padding: 12px 32px;
                                "
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    width: 100%;
                                    margin: 24px 0px;
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
                                          padding: 24px;
                                        "
                                      >
                                        <CompanyContacts />
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import EmailHead from "./EmailHead/EmailHead.vue";
import HeaderRoute from "./EmailHead/components/HeaderRoute.vue";
import PassengerDetail from "./PassengerDetail/PassengerDetail.vue";
import RouteDetail from "./RouteDetail/RouteDetail.vue";
import PassengerContacts from "./PassengerContacts/PassengerContacts.vue";
import CompanyContacts from "./CompanyContacts/CompanyContacts.vue";

const emit = defineEmits(["update-html-code"]);

const airportCode = ref("");

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

const cityToAirportMap = {
  "Moscow, Russia": "SVO",
  "Valencia, Spain": "VLC",
  // Добавьте другие города и аэропорты здесь
};

const updateAirportCode = () => {
  airportCode.value =
    cityToAirportMap[props.username] || "Код аэропорта не найден";
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
<style>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
