<template>
  <div>
    <h2>Transport Orders</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <table v-if="orders.length > 0">
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Customer Name</th>
          <th>Date</th>
          <th>Waypoints</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.order_number }}</td>
          <td>{{ order.customer_name }}</td>
          <td>{{ order.date }}</td>
          <td>
            <ul>
              <li v-for="waypoint in order.waypoints" :key="waypoint.id">
                {{ waypoint.location }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else-if="!loading">No orders found.</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { listTransportOrders, TransportOrder } from '../services/transportOrderService';

const orders = ref<TransportOrder[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    orders.value = await listTransportOrders();
  } catch (err: any) {
    error.value = 'Error fetching transport orders. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f0f0f0;
}
.error {
  color: red;
  margin-bottom: 10px;
}
</style>
