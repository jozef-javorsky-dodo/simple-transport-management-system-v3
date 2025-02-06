<template>
  <div>
    <label for="location">Location</label>
    <input type="text" id="location" v-model="waypoint.location" required />

    <label for="type">Type</label>
    <select id="type" v-model="waypoint.type">
      <option value="Pickup">Pickup</option>
      <option value="Delivery">Delivery</option>
    </select>

    <button type="button" @click="$emit('remove')">Remove</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Waypoint {
  location: string;
  type: 'Pickup' | 'Delivery';
}

const props = defineProps<{ waypoint: Waypoint }>();
const emit = defineEmits<{(e: 'remove'): void}>();
</script>

<style scoped>
div {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

div > * {
  margin: 0;
  padding: 0;
}
</style>