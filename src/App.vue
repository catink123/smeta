<template>
  <div class="main">
    <div class="mainControls">
      <div>
        <label
          >Страница:
          <select v-model="currentPage" @change="updatePage">
            <option v-for="name in pageNames()" :value="name" :key="name">
              {{ name }}
            </option>
          </select>
        </label>
      </div>

      <div>
        <button @click="showAddPageWindow = true">Добавить страницу</button>
        <button @click="editPage">Изменить текущую страницу</button>
        <button @click="deletePage">Удалить текущую страницу</button>
      </div>

      <div>
        <button @click="screenshot">Снимок текущей страницы</button>
      </div>
    </div>
    <table>
      <tr>
        <th>Наименование</th>
        <th>Кол-во</th>
        <th>Цена на ед. изм.</th>
        <th>Цена</th>
        <th v-if="!isScreenshotting">Управление</th>
      </tr>
      <tr v-for="el in data[currentPage]" :key="el.name">
        <td>{{ el.name }}</td>

        <td v-if="!el.cost">{{ el.count }} {{ el.units }}</td>
        <td v-else></td>

        <td v-if="!el.cost">{{ el.costPU }} руб.</td>
        <td v-else></td>

        <td v-if="!el.cost">
          {{ Math.round(el.count * el.costPU * 1000) / 1000 }} руб.
        </td>
        <td v-else>{{ el.cost }} руб.</td>
        <td v-if="!isScreenshotting">
          <div class="controls">
            <button @click="editItem(el.name)">🖉</button>
            <button @click="deleteItem(el.name)" class="delete">✖</button>
          </div>
        </td>
      </tr>
      <tr class="totalCost">
        <td>Общая цена</td>
        <td></td>
        <td></td>
        <td>{{ totalCost() }} руб.</td>
        <td v-if="!isScreenshotting"></td>
      </tr>
        <button @click="showAddWindow = true" class="addButton" v-if="!isScreenshotting">＋</button>
    </table>
    <div class="mainControls">
      <div>
        <div class="spacer"></div>
      </div>
    </div>
    <transition name="fade">
      <div class="overlay" v-if="showAddWindow">
        <add-window
          :addCallback="addNewItem"
          :isEditing="isEditing"
          :editingData="editingData"
          :editCallback="editItem"
          :cancelCallback="cancelCallback"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="overlay" v-if="showAddPageWindow">
        <add-page-window
          :addCallback="addNewPage"
          :isEditing="isEditingPage"
          :editingData="pageEditingData"
          :editCallback="editPage"
          :cancelCallback="cancelCallback"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import AddWindow from "./components/AddWindow.vue";
import AddPageWindow from "./components/AddPageWindow.vue";

import h2c from "html2canvas";
import { ref, nextTick } from "vue";
import download from "downloadjs";

export default {
  components: { AddWindow, AddPageWindow },
  name: "App",
  data: () => ({
    showAddWindow: false,
    isEditing: false,
    editingData: null,

    showAddPageWindow: false,
    isEditingPage: false,
    pageEditingData: null,
  }),
  setup() {
    var data;
    var isScreenshotting = ref(false);
    if (localStorage.data !== undefined && localStorage.version == 1) {
      data = JSON.parse(localStorage.data);
    } else {
      data = {
        "Стандартная страница": [],
      };
    }
    var currentPage = ref(Object.keys(data)[0]);

    function save() {
      localStorage.data = JSON.stringify(data);
      if (localStorage.version !== 1) localStorage.version = 1;
    }

    function screenshot() {
      isScreenshotting.value = true;
      nextTick().then(() => {
        h2c(document.querySelector("table")).then((canv) => {
          download(canv.toDataURL(), currentPage.value);
          isScreenshotting.value = false;
        });
      });
    }

    window.addEventListener("beforeunload", save);

    window.addEventListener("keydown", (e) => {
      if (e.key === "F2") {
        e.preventDefault();
        screenshot();
      }
    });

    return { data, save, isScreenshotting, currentPage, screenshot };
  },

  methods: {
    addNewItem(data) {
      this.data[this.currentPage].push(data);
      this.showAddWindow = false;

      this.$forceUpdate();
      this.save();
    },

    addNewPage(data) {
      Object.defineProperty(this.data, data.name, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [],
      });

      this.$forceUpdate();
      this.save();
      this.showAddPageWindow = false;
    },

    // Multi-functional method: if no new data is present, open an editing window; if there is new data, then set it.
    editItem(key, newData) {
      var index = this.data[this.currentPage].findIndex((val) => {
        if (val.name === key) return true;
        return false;
      });
      if (!newData) {
        this.editingData = this.data[this.currentPage][index];
        this.isEditing = true;

        this.showAddWindow = true;
      } else {
        this.data[this.currentPage][index] = newData;
        this.isEditing = false;
        this.editingData = null;

        this.showAddWindow = false;
        this.$forceUpdate();
      }
    },

    editPage(key, newData) {
      if (!newData) {
        this.isEditingPage = true;
        this.pageEditingData = { name: this.currentPage };
        this.showAddPageWindow = true;
      } else {
        Object.defineProperty(this.data, newData.name, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.data[this.currentPage],
        });
        var oldPageName = this.currentPage;
        this.currentPage = newData.name;
        delete this.data[oldPageName];

        this.showAddPageWindow = false;
        this.$forceUpdate();
      }
    },

    deleteItem(key) {
      if (window.confirm("Вы действительно хотите удалить эту запись?")) {
        var index = this.data[this.currentPage].findIndex((val) => {
          if (val.name === key) return true;
          return false;
        });

        this.data[this.currentPage].splice(index, 1);
        this.$forceUpdate();
      }
    },

    deletePage() {
      if (
        window.confirm(
          "Вы действительно хотите удалить текущую страницу (" +
            this.currentPage +
            ")?"
        )
      ) {
        delete this.data[this.currentPage];
        this.currentPage = Object.keys(this.data)[0];
      }
    },

    updatePage() {},

    cancelCallback() {
      this.isEditing = false;
      this.editingData = null;
      this.showAddWindow = false;

      this.isEditingPage = false;
      this.pageEditingData = null;
      this.showAddPageWindow = false;
    },

    totalCost() {
      var value = 0;
      for (const i in this.data[this.currentPage]) {
        var el = this.data[this.currentPage][i];
        if (el.cost) value += el.cost;
        else value += el.count * el.costPU;
      }
      return Math.round(value * 1000) / 1000;
    },

    pageNames() {
      return Object.keys(this.data);
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.showAddWindow = false;
        this.showAddPageWindow = false;
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

table,
td,
tr,
th {
  border: 1px solid rgb(50, 50, 50);
  border-collapse: collapse;
}

td,
th {
  padding: 5px;
}

div.controls {
  display: flex;
}

div.controls button {
  flex-grow: 1;
  border: 1px solid black;
  background: white;
  border-radius: 0;
  border-right: none;
}

div.controls button:last-child {
  border-right: 1px solid black;
}

div.controls button:hover {
  background: rgb(200, 200, 200);
}

div.controls button:active {
  background: black;
  color: white;
}

div.controls button.delete:hover {
  background: rgb(255, 200, 200);
}

div.controls button.delete:active {
  background: red;
}

select {
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

div.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

div.mainControls {
  gap: 5px;
  display: flex;
  margin-bottom: 5px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

div.mainControls > div {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
}

div.mainControls button {
  padding: 5px;
}

tr.totalCost {
  border-width: 2px;
  background: rgb(200, 255, 200);
}

div.main {
  align-items: center;
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.addButton {
  width: 30px;
  height: 30px;
  font-weight: bold;
  /* float: right; */
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(calc(-100% - 5px));
}

table {
  position: relative;
}

.spacer {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}
</style>
