<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("Yassine Bm");
    const status = ref("active");
    const tasks = ref(["Task 1", "Task 2", "Task3"]);

    const toggleStatus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };
    return {
      name,
      status,
      tasks,
      toggleStatus,
    };
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
  <br />
  <!--   <button v-on:click="toggleStatus">change status</button> -->
  <button @click="toggleStatus">change status</button>
</template>
