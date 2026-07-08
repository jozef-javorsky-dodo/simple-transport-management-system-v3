<template>
  <div class="card not-found-container">
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="btn-primary mt-4 inline-block"
      >Return to Orders</router-link
    >
  </div>
</template>

<style scoped>
.not-found-container {
  text-align: center;
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 2rem auto;
}
.not-found-container h2 {
  color: var(--error-color);
  margin-bottom: 1rem;
}
.not-found-container p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}
.mt-4 {
  margin-top: 1rem;
}
.inline-block {
  display: inline-block;
}
</style>
