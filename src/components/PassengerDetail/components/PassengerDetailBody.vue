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
                          height="24"
                          src="https://ci3.googleusercontent.com/meips/ADKq_Na__G3SN5dt7XxhCrxi2rzsFQNb6ZF0NaXxa6TeMdYz6uLAiaGcBhn8xjEQzMTZ9u7VssFTgB91MVbFQFhSc_zEQBMFOnyLCc5caVfzmXraOJKql0HRo40=s0-d-e1-ft#https://images.kiwi.com/orbit-icons/primary/48x48/gender-woman.png"
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
                          <strong>{{ firstName }} {{ secondName }}</strong>
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
                  <tbody>
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
                      >
                        1&nbsp;×
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
                          src="https://ci3.googleusercontent.com/meips/ADKq_Nbri2mgFDRuwpsIDG701ZJFL1ohbyrorfEBpY5ovuJ1ZQiGm-GdcmBD_gmyVJPp1atMFDTBn_4EqeKPDc7ODo-B_e2mMPDL84VWeRsfaBSSPR61pmgZDIEfz3mfES_aqJ8=s0-d-e1-ft#https://images.kiwi.com/orbit-icons/primary/48x48/baggage-personal-item.png"
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
                        Personal item <br /><span
                          style="
                            font-size: 12px;
                            line-height: 16px;
                            color: rgb(95, 115, 140);
                          "
                          >40 × 25 × 20 cm , 10 kg
                        </span>
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
import { inject } from "vue";

const firstName = inject("firstName");
const secondName = inject("secondName");
</script>

<style></style>
