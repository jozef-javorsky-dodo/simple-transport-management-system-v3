<template>
  <div class="app-container">
    <header>
      <h1>Simple Transport Management System</h1>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/">List Orders</router-link>
        </li>
        <li>
          <router-link to="/create">Create Order</router-link>
        </li>
      </ul>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 My Company</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

header {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

nav li {
  margin: 0 10px;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

footer {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
}
</style>