<template>
  <tbody>
    <tr>
      <th
        style="
          font-weight: normal;
          text-align: left;
          vertical-align: top;
          border-top: 1px solid rgb(232, 237, 241);
          padding: 12px 0px 0px;
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
                  style="
                    margin: 0px;
                    padding: 0px;
                    border-spacing: 0px;
                    font-size: 14px;
                    line-height: 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    text-align: left;
                    color: rgb(37, 42, 49);
                    width: auto;
                    table-layout: auto;
                    max-width: 100%;
                  "
                >
                  <tbody>
                    <tr
                      v-for="(passenger, index) in passengers"
                      :key="'output-' + index"
                    >
                      <th
                        style="
                          font-weight: normal;
                          font-size: 0px;
                          text-align: center;
                          width: 1px;
                          padding: 0px 12px 0px 0px;
                          vertical-align: top;
                        "
                      >
                        <img
                          alt=""
                          height="24"
                          src="https://i.ibb.co/NNYy4z7/icons8-person-30.png"
                          width="24"
                          class="CToWUd"
                          data-bit="iit"
                          style="border: 0px; vertical-align: middle"
                        />
                      </th>
                      <th
                        style="
                          font-weight: normal;
                          text-align: left;
                          vertical-align: top;
                        "
                      >
                        <p style="margin: 0px 0px 4px">
                          <strong
                            >{{ passenger?.firstName }}
                            {{ passenger?.secondName }}</strong
                          >
                        </p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
          </tbody>
        </table>
      </th>
      <th
        style="
          font-weight: normal;
          text-align: left;
          vertical-align: top;
          width: 16px;
          border-top: 1px solid rgb(232, 237, 241);
          padding: 12px 0px 0px;
        "
      ></th>
      <th
        style="
          font-weight: normal;
          text-align: left;
          vertical-align: top;
          border-top: 1px solid rgb(232, 237, 241);
          padding: 12px 0px 0px;
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
                  <!-- Багаж -->
                  <tbody>
                    <tr v-if="!!cabinBag">
                      <th
                        style="
                          font-weight: normal;
                          text-align: left;
                          vertical-align: top;
                          width: 1px;
                          padding-right: 6px;
                          white-space: nowrap;
                        "
                      >
                        {{ countCabinBag }} &nbsp;×
                      </th>
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
                          src="https://i.ibb.co/mcHPWSh/unnamed-5.png"
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
                        Cabin baggage <br /><span
                          style="
                            font-size: 12px;
                            line-height: 16px;
                            color: rgb(95, 115, 140);
                          "
                          >{{ sizeCabinBag }} cm , {{ weightCabinBag }} kg
                        </span>
                      </th>
                    </tr>
                    <tr v-if="!!checkBag">
                      <th
                        style="
                          font-weight: normal;
                          text-align: left;
                          vertical-align: top;
                          width: 1px;
                          padding-right: 6px;
                          white-space: nowrap;
                        "
                      >
                        {{ countCheckedBag }} &nbsp;×
                      </th>
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
                          src="https://i.ibb.co/B6YwT39/luggage.png"
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
                        Checked baggage <br /><span
                          style="
                            font-size: 12px;
                            line-height: 16px;
                            color: rgb(95, 115, 140);
                          "
                          >L + W + H = {{ sizeCheckedBag }} cm ,
                          {{ weightCheckedBag }} kg
                        </span>
                      </th>
                    </tr>
                  </tbody>
                  <!-- Без багажа -->
                  <tbody v-if="!(cabinBag || checkBag)">
                    <tr>
                      <th
                        style="
                          font-weight: normal;
                          text-align: left;
                          vertical-align: top;
                          width: 1px;
                          padding-right: 6px;
                          white-space: nowrap;
                        "
                      ></th>
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
                          src="https://i.ibb.co/7X36qVy/icons8-no-baggage-50.png"
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
                        No baggage <br />
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
</template>

<script setup>
import { ref, inject } from "vue";

const cabinBag = inject("cabinBag");
const checkBag = inject("checkBag");
const countCabinBag = inject("countCabinBag");
const weightCabinBag = inject("weightCabinBag");
const sizeCabinBag = inject("sizeCabinBag");
const countCheckedBag = inject("countCheckedBag");
const weightCheckedBag = inject("weightCheckedBag");
const sizeCheckedBag = inject("sizeCheckedBag");

// Получить инжектированные данные
const passengers = inject("passengers", ref([]));
</script>

<style></style>
