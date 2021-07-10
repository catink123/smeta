<template>
  <window :title="isEditing ? 'Изменить страницу' : 'Добавить страницу'">
    <form>
      <ul>
        <li>
          <label>
            Название:
            <input type="text" required name="name" :value="isEditing ? editingData.name : null" />
          </label>
        </li>
        <li class="controls">
          <input type="button" :value="isEditing ? 'Изменить' : 'Добавить'" @click.prevent="parse">
          <input type="button" value="Отмена" @click.prevent="cancelCallback">
        </li>
      </ul>
    </form>
  </window>
</template>

<script>
import Window from './Window.vue';
export default {
  name: "AddPageWindow",
  components: { Window },
  props: {
    addCallback: Function,
    isEditing: Boolean,
    editingData: Object,
    editCallback: Function,
    cancelCallback: Function
  },
  methods: {
    parse() {
      var name = document.getElementsByName("name")[0].value;

      var proceed = true;
      var inputsToFill = [];

      if (name.length === 0) {
        proceed = false;
        inputsToFill.push("Наименование");
      }

      if (proceed) {
        if (this.isEditing) this.editCallback(this.editingData.name, {
          name,
        });
        else this.addCallback({
          name,
        });
      } else {
        alert(
          `Проверьте написание пол${
            inputsToFill.length === 1 ? "я" : "ей"
          } ${inputsToFill.join(", ")}.`
        );
      }
    }
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

input[type=button] {
  padding: 5px;
  /* width: 100%; */
  background: white;
  border: 1px solid black;
  border-radius: 0;
}

input[type=button]:hover {
  background: rgb(200, 200, 200);
}

input[type=button]:active {
  background: black;
  color: white;
}

li.controls {
  display: flex;
}

li.controls input[type=button] {
  flex-grow: 1;
  border-right: none;
}

li.controls input[type=button]:last-child {
  border-right: 1px solid black;
}

li {
  text-decoration: none;
  list-style: none;
}
</style>