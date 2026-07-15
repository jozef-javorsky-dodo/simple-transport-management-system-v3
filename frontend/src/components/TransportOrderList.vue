<template>
  <div class="card">
    <div class="header-action">
      <h2>Transport Orders</h2>
      <router-link to="/create" class="btn-primary">New Order</router-link>
    </div>

    <div v-if="error" class="error-banner">{{ error }}</div>

    <div v-if="orders.length > 0" class="table-container">
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Waypoints</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td class="font-medium">{{ order.order_number }}</td>
            <td>{{ order.customer_name }}</td>
            <td>{{ order.date }}</td>
            <td>
              <div class="waypoints-badges">
                <span
                  v-for="waypoint in order.waypoints"
                  :key="waypoint.id"
                  class="badge"
                  :class="waypoint.type"
                >
                  {{ waypoint.location }} ({{ waypoint.type }})
                </span>
              </div>
            </td>
            <td>
              <div class="actions">
                <router-link :to="`/edit/${order.id}`" class="btn-text edit-btn"
                  >Edit</router-link
                >
                <button
                  @click="deleteOrder(order.id)"
                  class="btn-text delete-btn"
                  :disabled="deletingId === order.id"
                >
                  {{ deletingId === order.id ? "Deleting..." : "Delete" }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="!loading" class="empty-state">
      <p>No orders found. Create one to get started.</p>
    </div>
    <div v-else class="loading-state">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  listTransportOrders,
  deleteTransportOrder,
  TransportOrder,
} from "../services/transportOrderService";

const orders = ref<TransportOrder[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const deletingId = ref<number | null>(null);

const deleteOrder = async (id: number) => {
  if (!confirm("Are you sure you want to delete this transport order?")) return;

  try {
    deletingId.value = id;
    await deleteTransportOrder(id);
    orders.value = orders.value.filter((o) => o.id !== id);
  } catch (err: any) {
    alert("Failed to delete order. Please try again.");
    console.error(err);
  } finally {
    deletingId.value = null;
  }
};

onMounted(async () => {
  try {
    orders.value = await listTransportOrders();
  } catch (err: any) {
    error.value = "Error fetching transport orders. Please try again later.";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.header-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  color: white;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

th {
  background-color: #f9fafb;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

tr:last-child td {
  border-bottom: none;
}

.font-medium {
  font-weight: 500;
  color: var(--text-primary);
}

.waypoints-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
}

.badge.pickup {
  background-color: #dbeafe;
  color: #1e40af;
}

.badge.delivery {
  background-color: #d1fae5;
  color: #065f46;
}

.error-banner {
  background-color: #fef2f2;
  color: var(--error-color);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
}

.empty-state,
.loading-state {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
}

.actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.btn-text {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}

.edit-btn {
  color: var(--primary-color);
}

.edit-btn:hover {
  text-decoration: underline;
}

.delete-btn {
  color: var(--error-color);
}

.delete-btn:hover:not(:disabled) {
  text-decoration: underline;
}

.delete-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
