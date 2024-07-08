<script>
export default {
  data() {
    return {
      name: "Yassine Bm",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task3"],
      link: "https://www.google.ch/",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">user active</p>
  <p v-else-if="status === 'pending'">user pending</p>
  <p v-else="status">user inactive</p>
  <br />
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for google</a> -->
  <a :href="link">Click for google</a>
  <br />
  <!--   <button v-on:click="toggleStatus">change status</button> -->
  <button @click="toggleStatus">change status</button>
</template>
