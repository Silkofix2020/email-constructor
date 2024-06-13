<template>
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
    "
  >
    <tbody>
      <tr>
        <th
          style="
            font-weight: normal;
            text-align: left;
            vertical-align: top;
            padding-bottom: 12px;
            padding-top: 0px;
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
                    vertical-align: middle;
                    font-weight: normal;
                    text-align: left;
                    padding-bottom: 4px;
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
                      max-width: 100%;
                      table-layout: auto;
                    "
                  >
                    <tbody>
                      <tr>
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
                            height="16"
                            src="https://ci3.googleusercontent.com/meips/ADKq_NZ9rjIV0vbCyrBs37lzp4w0MC9FB6KhwZflhZpis-Ay9bfwXtJHSs-_NfeyKEn8BjF1KZSn_vLPLBcFleoafLEW8-gsitIyJ0-fm7vtgSZ97g=s0-d-e1-ft#https://images.kiwi.com/orbit-icons/primary/32x32/phone.png"
                            width="16"
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
                          <p>{{ passengerPhone }}</p>
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
              table-layout: auto;
            "
          >
            <tbody>
              <tr>
                <th
                  style="
                    vertical-align: middle;
                    font-weight: normal;
                    text-align: left;
                    padding-bottom: 4px;
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
                      max-width: 100%;
                      table-layout: auto;
                    "
                  >
                    <tbody>
                      <tr>
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
                            height="16"
                            src="https://ci3.googleusercontent.com/meips/ADKq_NbNJRTBKyMblbA0o3CPEFkmlDfxRmT4avVVPrhoSfFvKy_fkIvDAlqNBHRVII8C7WC-27PhvtbS1fZCYQNg2V1AUBpGNAjW1JPKOGGD0nDSFg=s0-d-e1-ft#https://images.kiwi.com/orbit-icons/primary/32x32/email.png"
                            width="16"
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
                          <a
                            :href="`mailto:${passengerEmail}`"
                            target="_blank"
                            >{{ passengerEmail }}</a
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
</template>

<script setup>
import { inject } from "vue";

const passengerPhone = inject("passengerPhone");
const passengerEmail = inject("passengerEmail");
</script>

<style></style>
