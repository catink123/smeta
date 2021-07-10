<template>
  <window :title="isEditing ? 'Изменить запись' : 'Добавить запись'">
    <form>
      <ul>
        <li>
          <label for="name">Наименование: </label>
          <input
            type="text"
            name="name"
            placeholder="Например, Штукатурка"
            :value="isEditing ? editingData.name : null"
            required
          />
        </li>
        <li>
          <input type="checkbox" name="customCost" v-model="customCost" />
          <label for="customCost">Нестандартный предмет</label>
        </li>
        <li v-if="!customCost">
          <label for="area">Кол-во + Ед. Измерения: </label>
          <input
            type="text"
            name="count"
            placeholder="Например, 2.5 м2"
            :value="isEditing ? `${editingData.count} ${editingData.units}`  : null"
            required
          />
        </li>
        <li v-if="!customCost">
          <label for="costPMSQ">Цена на ед. изм.: </label>
          <input
            type="text"
            name="costPU"
            placeholder="Например, 10"
            :value="isEditing ? editingData.costPU : null"
            required
          />
        </li>
        <li v-if="customCost">
          <label for="cost">Цена: </label>
          <input
            type="text"
            name="cost"
            placeholder="Например, 75"
            :value="isEditing ? editingData.cost : null"
            required
          />
        </li>
        <li class="controls">
          <input
            type="button"
            :value="isEditing ? 'Изменить' : 'Добавить'"
            @click.prevent="parse()"
          />
          <input type="button" value="Отмена" @click.prevent="cancelCallback" />
        </li>
      </ul>
    </form>
  </window>
</template>

<script>
import Window from "./Window.vue";
import { ref } from "vue";

export default {
  components: { Window },
  name: "AddWindow",
  props: {
    addCallback: Function,
    isEditing: Boolean,
    editingData: Object,
    editCallback: Function,
    cancelCallback: Function,
  },
  setup(props) {
    var customCost = ref(false);
    if (props.editingData !== null && props.editingData.cost) {
      customCost.value = true;
    }

    function parse() {
      var name = document.getElementsByName("name")[0].value;
      if (!customCost.value) {
        var count = document.getElementsByName("count")[0].value;
        var costPU = parseFloat(
          document.getElementsByName("costPU")[0].value
        );
      } else {
        var cost = parseFloat(document.getElementsByName("cost")[0].value);
      }

      var proceed = true;
      var inputsToFill = [];

      if (name.length === 0) {
        proceed = false;
        inputsToFill.push("Наименование");
      }

      if (customCost.value) {
        if (isNaN(cost)) {
          proceed = false;
          inputsToFill.push("Цена");
        }
      } else {
        var split = count.split(" ");
        if (isNaN(parseFloat(split[0]))) {
          proceed = false;
          inputsToFill.push("Кол-во + Ед. Измерения");
        }
        if (isNaN(costPU)) {
          proceed = false;
          inputsToFill.push("Цена на ед. изм.");
        }
      }

      if (proceed) {
        var resultObj;
        if (customCost.value) {
          resultObj = {
            name,
            cost,
          };
        } else {
          resultObj = {
            name,
            count: parseFloat(split[0]),
            units: split[1],
            costPU,
          };
        }
        if (props.isEditing) props.editCallback(props.editingData.name, resultObj);
        else props.addCallback(resultObj);
      } else {
        alert(
          `Проверьте написание пол${
            inputsToFill.length === 1 ? "я" : "ей"
          } ${inputsToFill.join(", ")}.`
        );
      }
    }

    return { customCost, parse };
  },

  mounted() {
    document.querySelectorAll("form input").forEach(val => {
      val.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.parse();
        }
      });
    });
  }
};
</script>

<style scoped>
ul li {
  margin: 5px 0;
}

ul {
  padding: 0;
  margin-bottom: 0;
}

ul li:last-child {
  margin-bottom: 0;
}

input[type="button"] {
  padding: 5px;
  /* width: 100%; */
  background: white;
  border: 1px solid black;
  border-radius: 0;
}

input[type="button"]:hover {
  background: rgb(200, 200, 200);
}

input[type="button"]:active {
  background: black;
  color: white;
}

li.controls {
  display: flex;
}

li.controls input[type="button"] {
  flex-grow: 1;
  border-right: none;
}

li.controls input[type="button"]:last-child {
  border-right: 1px solid black;
}

li {
  text-decoration: none;
  list-style: none;
}
</style>