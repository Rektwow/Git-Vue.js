<script setup>
import { ref } from "vue";

const name = ref("Yassine Bm");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">user active</p>
  <p v-else-if="status === 'pending'">user pending</p>
  <p v-else="status">user inactive</p>
  <br />
  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <br />
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <br />
  <!--   <button v-on:click="toggleStatus">change status</button> -->
  <button @click="toggleStatus">change status</button>
</template>
