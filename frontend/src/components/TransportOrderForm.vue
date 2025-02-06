<template>
  
  <form @submit.prevent="submitForm">
    <div>
      <label for="order-number">Order Number</label>
      <input type="text" id="order-number" v-model="order.order_number" required />
    </div>

    <div>
      <label for="customer-name">Customer Name</label>
      <input type="text" id="customer-name" v-model="order.customer_name" required />
    </div>

    <div>
      <label for="date">Date</label>
      <input type="date" id="date" v-model="order.date" required />
    </div>

    <div>
      <h2>Waypoints</h2>
      <WaypointForm
        v-for="(waypoint, index) in order.waypoints"
        :key="index"
        :waypoint="waypoint"
        @remove="removeWaypoint(index)"
      />
      <button type="button" @click="addWaypoint">Add Waypoint</button>
    </div>

    <button type="submit">Create Order</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import WaypointForm from './WaypointForm.vue';

interface Waypoint {
  location: string;
  type: 'Pickup' | 'Delivery';
}

interface TransportOrder {
  order_number: string;
  customer_name: string;
  date: string;
  waypoints: Waypoint[];
}

const order = reactive<TransportOrder>({
  order_number: '',
  customer_name: '',
  date: '',
  waypoints: [],
});

// Function to add a new waypoint to the list
const addWaypoint = () => {
  order.waypoints.push({
    location: '',
    type: 'Pickup',
  });
};

const removeWaypoint = (index: number) => {
  order.waypoints.splice(index, 1);
};

const submitForm = () => {
  console.log('Form submitted', order);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form > div {
  display: flex;
  flex-direction: column;
}
</style>