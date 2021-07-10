<template>
  <div>
    <h2>{{ title }}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Window",
  props: {
    title: String
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
  background: white;
  padding: 10px;
  width: fit-content;
  height: fit-content;
}

h2 {
  margin: 0;
}
</style>