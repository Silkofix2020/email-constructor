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
                                <Button>Buy for ${{ price }} </Button>
                                <p>
                                  <strong>Want more options?</strong> Let us
                                  know your preferences (price range, travel
                                  time, etc.), and we can find additional
                                  flights that suit your needs. <br /><br />
                                  <strong>Have questions?</strong> Don't
                                  hesitate to reply to this email, and our team
                                  will be happy to assist you.
                                </p>
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
                                <EmailFooter />
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
import { ref, inject, onMounted } from "vue";
import EmailHead from "./EmailHead/EmailHead.vue";
import EmailFooter from "./EmailFooter/EmailFooter.vue";
import HeaderRoute from "./EmailHead/components/HeaderRoute.vue";
import PassengerDetail from "./PassengerDetail/PassengerDetail.vue";
import RouteDetail from "./RouteDetail/RouteDetail.vue";
import PassengerContacts from "./PassengerContacts/PassengerContacts.vue";
import CompanyContacts from "./CompanyContacts/CompanyContacts.vue";
import Button from "./Button.vue";

const emit = defineEmits(["update-html-code"]);

const contentRef = ref(null);
const price = inject("price");

const updateHtmlCode = () => {
  if (contentRef.value) {
    emit("update-html-code", contentRef.value.innerHTML);
  }
};

// Использование MutationObserver для отслеживания изменений
const observeChanges = () => {
  const observer = new MutationObserver(updateHtmlCode);
  observer.observe(contentRef.value, {
    childList: true,
    subtree: true,
    characterData: true,
  });
};

// Вызов updateHtmlCode и настройка наблюдателя при монтировании компонента
onMounted(() => {
  updateHtmlCode();
  observeChanges();
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
