<template>
  <div class="waypoint-form">
    <div class="input-group flex-1">
      <input
        type="text"
        id="location"
        v-model="waypoint.location"
        placeholder="Address or Location"
        required
        class="full-width"
      />
    </div>

    <div class="input-group">
      <select id="type" v-model="waypoint.type">
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
      </select>
    </div>

    <button
      type="button"
      class="btn-icon"
      @click="$emit('remove')"
      title="Remove Waypoint"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
interface Waypoint {
  location: string;
  type: "pickup" | "delivery";
}

defineProps<{ waypoint: Waypoint }>();
defineEmits<{ (e: "remove"): void }>();
</script>

<style scoped>
.waypoint-form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: white;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.input-group {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.full-width {
  width: 100%;
  box-sizing: border-box;
}

select {
  background-color: #f9fafb;
}

.btn-icon {
  background: none;
  color: var(--text-secondary);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.btn-icon:hover {
  background-color: #fee2e2;
  color: var(--error-color);
  box-shadow: none;
}
</style>
