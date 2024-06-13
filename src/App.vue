<template>
  <div class="app-wrapper">
    <div class="constuctor-inputs">
      <div class="constuctor-inputs__group">
        <h3>Данные пассажира</h3>
        <button class="btn" @click="addPassenger">Add pass +</button>
        <div
          class="constuctor-inputs__group"
          v-for="(passenger, index) in passengers"
          :key="index"
        >
          <label :for="'firstName' + index">Имя</label>
          <input
            :placeholder="'Pass name ' + (index + 1)"
            :name="'firstName' + index"
            type="text"
            v-model="passenger.firstName"
          />
          <label :for="'secondName' + index">Фамилия</label>
          <input
            :placeholder="'Pass secondname ' + (index + 1)"
            :name="'secondName' + index"
            type="text"
            v-model="passenger.secondName"
          />
          <button class="btn" @click="removePassenger(index)">
            Remove pass -
          </button>
        </div>
      </div>
      <div class="constuctor-inputs__group">
        <h3>Данные заказчика</h3>
        <label for="passengerPhone">Телефон</label>
        <input
          placeholder="+19876543212"
          name="passengerPhone"
          type="text"
          v-model="passengerPhone"
        />
        <label for="passengerEmail">E-mail</label>
        <input
          placeholder="example@example.com"
          name="passengerEmail"
          type="text"
          v-model="passengerEmail"
        />
      </div>
      <div class="wrap">
        <div class="constuctor-inputs__group">
          <h3>Данные отправления</h3>
          <label for="fromCity">Откуда (Город)</label>
          <input
            placeholder="Moscow"
            name="fromCity"
            type="text"
            v-model="fromCity"
          />
          <label for="fromAeroCode">Откуда (Код аэропорта)</label>
          <input
            placeholder="SVO"
            name="fromAeroCode"
            type="text"
            v-model="fromAeroCode"
          />
          <label for="fromCountry">Откуда (Страна)</label>
          <input
            placeholder="USSR"
            name="fromCountry"
            type="text"
            v-model="fromCountry"
          />
          <label for="aviacompanyFrom">Авиакомпания</label>
          <input
            placeholder="Aeroflot"
            name="aviacompanyFrom"
            type="text"
            v-model="aviacompanyFrom"
          />
          <label for="fromTime">Время вылета</label>
          <input
            name="fromTime"
            placeholder="чч:мм"
            type="text"
            v-model="fromTime"
            @input="formatTimeInput('fromTime')"
          />
          <label for="fromDate">Дата вылета</label>
          <input name="fromDate" type="date" v-model="fromDate" />
        </div>
        <div class="constuctor-inputs__group">
          <h3>Данные прибытия</h3>
          <label for="toCity">Куда (Город)</label>
          <input
            placeholder="Berlin"
            name="toCity"
            type="text"
            v-model="toCity"
          />
          <label for="toAeroCode">Куда (Код аэропорта)</label>
          <input
            placeholder="BER"
            name="toAeroCode"
            type="text"
            v-model="toAeroCode"
          />
          <label for="toCountry">Куда (Страна)</label>
          <input
            placeholder="Germany"
            name="toCountry"
            type="text"
            v-model="toCountry"
          />
          <label for="aviacompanyTo">Авиакомпания</label>
          <input
            placeholder="Aeroflot"
            name="aviacompanyTo"
            type="text"
            v-model="aviacompanyTo"
          />
          <label for="toTime">Время прилета</label>
          <input
            name="toTime"
            placeholder="чч:мм"
            type="text"
            v-model="toTime"
            @input="formatTimeInput('toTime')"
          />
          <label for="toDate">Дата прилета</label>
          <input name="toDate" type="date" v-model="toDate" />
        </div>
      </div>

      <div class="constuctor-inputs__group">
        <h3>Багаж</h3>
        <div class="constuctor-inputs__subgroup">
          <label for="cabinBag">Ручная кладь</label>
          <input name="cabinBag" type="checkbox" v-model="cabinBag" />
        </div>

        <div class="constuctor-inputs__subgroup">
          <label for="checkBag">Сдаваемый багаж</label>
          <input name="checkBag" type="checkbox" v-model="checkBag" />
        </div>

        <label for="countCabinBag">Кол-во ручного багажа</label>
        <input
          placeholder="1"
          name="countCabinBag"
          type="text"
          v-model="countCabinBag"
        />
        <label for="weightCabinBag">Вес ручного багажа</label>
        <input
          placeholder="10"
          name="weightCabinBag"
          type="text"
          v-model="weightCabinBag"
        />
        <label for="sizeCabinBag">Габариты ручного багажа</label>
        <input
          placeholder="20 x 20 x 20"
          name="sizeCabinBag"
          id="sizeCabinBag"
          type="text"
          v-model="sizeCabinBag"
          @input="formatInput('sizeCabinBag')"
          maxlength="12"
        />
        <label for="countCheckedBag">Кол-во сдаваемого багажа</label>
        <input
          placeholder="1"
          name="countCheckedBag"
          type="text"
          v-model="countCheckedBag"
        />
        <label for="weightCheckedBag">Вес сдаваемого багажа</label>
        <input
          placeholder="10"
          name="weightCheckedBag"
          type="text"
          v-model="weightCheckedBag"
        />
        <label for="sizeCheckedBag">Габариты сдаваемого багажа</label>
        <input
          placeholder="20 x 20 x 20"
          name="sizeCheckedBag"
          id="sizeCheckedBag"
          type="text"
          maxlength="12"
          v-model="sizeCheckedBag"
          @input="formatInput('sizeCheckedBag')"
        />
      </div>
      <div class="constuctor-inputs__group"></div>
      <div class="constuctor-inputs__group">
        <h3>Ссылка на оплату</h3>
        <label for="payment-link">Payment link</label>
        <input name="payment-link" type="text" v-model="paymentLink" />
      </div>
    </div>

    <div class="preview">
      <EmailPreview @update-html-code="updateHtmlCode"></EmailPreview>
      <div class="html-code">
        <h2>HTML код:</h2>

        <pre><code>{{ htmlCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";

import EmailPreview from "./components/EmailPreview.vue";

const htmlCode = ref("");
const passengerPhone = ref("");
const passengerEmail = ref("");
const fromCity = ref("");
const fromAeroCode = ref("");
const fromCountry = ref("");
const fromTime = ref("");
const fromDate = ref("");
const toCity = ref("");
const toAeroCode = ref("");
const toCountry = ref("");
const toTime = ref("");
const toDate = ref("");
const roundTrip = ref("");
const cabinBag = ref("");
const checkBag = ref("");
const countCabinBag = ref("");
const weightCabinBag = ref("");
const sizeCabinBag = ref("");
const countCheckedBag = ref("");
const weightCheckedBag = ref("");
const sizeCheckedBag = ref("");
const paymentLink = ref("");
const aviacompanyFrom = ref("");
const aviacompanyTo = ref("");

provide("fromAeroCode", fromAeroCode);
provide("fromCity", fromCity);
provide("fromCountry", fromCountry);
provide("aviacompanyFrom", aviacompanyFrom);
provide("fromTime", fromTime);
provide("fromDate", fromDate);
provide("toAeroCode", toAeroCode);
provide("toCity", toCity);
provide("toCountry", toCountry);
provide("aviacompanyTo", aviacompanyTo);
provide("toTime", toTime);
provide("toDate", toDate);
provide("cabinBag", cabinBag);
provide("checkBag", checkBag);
provide("countCabinBag", countCabinBag);
provide("weightCabinBag", weightCabinBag);
provide("sizeCabinBag", sizeCabinBag);
provide("countCheckedBag", countCheckedBag);
provide("weightCheckedBag", weightCheckedBag);
provide("sizeCheckedBag", sizeCheckedBag);
provide("paymentLink", paymentLink);
provide("passengerPhone", passengerPhone);
provide("passengerEmail", passengerEmail);

// Массив объектов, где каждый объект представляет одного пассажира
const passengers = ref([{ firstName: "", secondName: "" }]);
const routes = ref([
  {
    fromAeroCode: "",
    fromCity: "",
    fromCountry: "",
    aviacompanyFrom: "",
    fromTime: "",
    fromDate: "",
    toAeroCode: "",
    toCity: "",
    toCountry: "",
    aviacompanyTo: "",
    toTime: "",
    toDate: "",
  },
]);

const addPassenger = () => {
  passengers.value.push({ firstName: "", secondName: "" });
};

const removePassenger = (index) => {
  passengers.value.splice(index, 1);
};
// Provide the passengers array and functions
provide("passengers", passengers);
provide("addPassenger", addPassenger);
provide("removePassenger", removePassenger);

// Форматирование габаритов
const formatInput = (field) => {
  if (field === "sizeCabinBag" || field === "sizeCheckedBag") {
    let value =
      field === "sizeCabinBag" ? sizeCabinBag.value : sizeCheckedBag.value;
    value = value.replace(/[^0-9]/g, "");
    const formattedValue = formatValue(value);
    if (field === "sizeCabinBag") {
      sizeCabinBag.value = formattedValue;
    } else {
      sizeCheckedBag.value = formattedValue;
    }
  }
};

const formatValue = (value) => {
  // Разбить строку на части по два символа
  let parts = [];
  for (let i = 0; i < value.length; i += 2) {
    parts.push(value.slice(i, i + 2));
  }
  // Объединить части обратно в формат 20 x 20 x 20
  return parts.join(" x ");
};

// Форматирование времени
const formatTimeInput = (field) => {
  if (field === "fromTime" || field === "toTime") {
    let value = field === "fromTime" ? fromTime.value : toTime.value;
    value = value.replace(/[^0-9]/g, ""); // Удалить все кроме цифр
    const formattedValue = formatTimeValue(value);
    if (field === "fromTime") {
      fromTime.value = formattedValue;
    } else {
      toTime.value = formattedValue;
    }
  }
};

const formatTimeValue = (value) => {
  if (value.length > 4) {
    value = value.slice(0, 4); // Ограничить до 4 символов
  }
  if (value.length > 2) {
    value = `${value.slice(0, 2)}:${value.slice(2)}`; // Добавить двоеточие после второго символа
  }
  return value;
};

const updateHtmlCode = (code) => {
  htmlCode.value = code;
};
</script>

<style>
.wrap {
  display: flex;
  gap: 5px;
}
.preview {
  display: flex;
  gap: 5px;
}
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
  width: 900px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.constuctor-inputs {
  border: 1px solid #5c5c5c;
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  color: #1a202c;
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
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.constuctor-inputs__group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
  font-weight: 400;
}
.constuctor-inputs__subgroup {
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn {
  background-color: #00c16a;
  border: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #00a155;
}
input,
input[type="date"] {
  border: 1px solid #cbd5e1;
  padding: 6px 10px;
  border-radius: 7px;
  color: #1a202c;
}
input:focus {
  outline-offset: 1px;
  outline-color: #00a155;
  transition: none;
}
input::placeholder,
input[type="date"]::placeholder {
  color: #cbd5e0;
}
</style>
