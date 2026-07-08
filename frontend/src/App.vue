<template>
  <div class="app-container">
    <header class="header">
      <div class="header-content">
        <h1>Transport Management System</h1>
        <nav>
          <ul>
            <li>
              <router-link to="/" exact-active-class="active"
                >Orders</router-link
              >
            </li>
            <li>
              <router-link to="/create" exact-active-class="active"
                >New Order</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2026 My Company</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: var(--card-bg);
  box-shadow: var(--shadow-sm);
  padding: 1rem 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--primary-color);
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
}

nav a {
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: var(--border-radius);
}

nav a:hover,
nav a.active {
  color: var(--primary-color);
  background-color: #eef2ff;
}

.main-content {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.footer {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  padding: 1.5rem;
  text-align: center;
  color: var(--text-secondary);
}
</style>
