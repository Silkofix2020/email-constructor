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
            padding-bottom: 16px;
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
                    border-radius: 3px;
                    padding: 16px;
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
                            padding-bottom: 12px;
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
                              table-layout: auto;
                            "
                          >
                            <tbody>
                              <tr>
                                <th
                                  style="
                                    font-weight: normal;
                                    text-align: left;
                                    vertical-align: top;
                                    width: 16px;
                                    padding-right: 8px;
                                  "
                                >
                                  <img
                                    alt=""
                                    height="24"
                                    src="https://i.ibb.co/2tgj1B8/unnamed-6.png"
                                    width="24"
                                    class="CToWUd"
                                    data-bit="iit"
                                    style="border: 0px; vertical-align: top"
                                  />
                                </th>
                                <th
                                  style="
                                    font-weight: normal;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                >
                                  <strong>{{ fromAeroCode }}</strong>
                                  {{ fromCity }}, {{ fromCountry }} <br />
                                  <div style="padding-top: 8px">
                                    Carrier:
                                    <strong>{{ aviacompanyFrom }}</strong>
                                  </div>
                                </th>
                                <th
                                  style="
                                    font-weight: normal;
                                    vertical-align: top;
                                    text-align: right;
                                  "
                                >
                                  <strong>{{ fromTime }}</strong
                                  ><br /><span
                                    style="
                                      font-size: 12px;
                                      line-height: 16px;
                                      color: rgb(95, 115, 140);
                                    "
                                    >{{ formattedFromDate }}</span
                                  >
                                </th>
                              </tr>
                            </tbody>
                          </table>
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
                              table-layout: auto;
                            "
                          >
                            <tbody>
                              <tr>
                                <th
                                  style="
                                    font-weight: normal;
                                    text-align: left;
                                    vertical-align: top;
                                    width: 16px;
                                    padding-right: 8px;
                                  "
                                >
                                  <img
                                    alt=""
                                    height="24"
                                    src="https://i.ibb.co/XbNWtrS/unnamed-7.png"
                                    width="24"
                                    class="CToWUd"
                                    data-bit="iit"
                                    style="border: 0px; vertical-align: top"
                                  />
                                </th>
                                <th
                                  style="
                                    font-weight: normal;
                                    text-align: left;
                                    vertical-align: top;
                                  "
                                >
                                  <strong>{{ toAeroCode }}</strong>
                                  {{ toCity }}, {{ toCountry }} <br />
                                  <div style="padding-top: 8px">
                                    Carrier:
                                    <strong>{{ aviacompanyTo }}</strong>
                                  </div>
                                </th>
                                <th
                                  style="
                                    font-weight: normal;
                                    vertical-align: top;
                                    text-align: right;
                                  "
                                >
                                  <strong>{{ toTime }}</strong
                                  ><br /><span
                                    style="
                                      font-size: 12px;
                                      line-height: 16px;
                                      color: rgb(95, 115, 140);
                                    "
                                    >{{ formattedToDate }}</span
                                  >
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
</template>

<script setup>
import { inject, ref, watch } from "vue";
import dayjs from "dayjs";

const fromAeroCode = inject("fromAeroCode");
const fromCity = inject("fromCity");
const fromCountry = inject("fromCountry");
const aviacompanyFrom = inject("aviacompanyFrom");
const fromTime = inject("fromTime");
const fromDate = inject("fromDate");
const toAeroCode = inject("toAeroCode");
const toCity = inject("toCity");
const toCountry = inject("toCountry");
const aviacompanyTo = inject("aviacompanyTo");
const toTime = inject("toTime");
const toDate = inject("toDate");

const formattedFromDate = ref("");
const formattedToDate = ref("");

// Функция для форматирования дат
const formatDate = (date) => {
  return dayjs(date).format("ddd, D MMM YYYY");
};

// Наблюдаем за изменениями `fromDate` и `toDate`
watch(
  fromDate,
  (newFromDate) => {
    formattedFromDate.value = newFromDate ? formatDate(newFromDate) : "";
  },
  { immediate: true }
);

watch(
  toDate,
  (newToDate) => {
    formattedToDate.value = newToDate ? formatDate(newToDate) : "";
  },
  { immediate: true }
);
</script>

<style></style>
