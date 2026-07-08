<template>
  <div class="card max-w-lg">
    <h2>Create New Order</h2>
    <form @submit.prevent="submitForm" class="form-layout">
      <div class="form-group">
        <label for="order-number">Order Number</label>
        <input
          type="text"
          id="order-number"
          v-model="order.order_number"
          placeholder="e.g. ORD-001"
          required
        />
      </div>

      <div class="form-group">
        <label for="customer-name">Customer Name</label>
        <input
          type="text"
          id="customer-name"
          v-model="order.customer_name"
          placeholder="e.g. Acme Corp"
          required
        />
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="order.date" required />
      </div>

      <div class="waypoints-section">
        <div class="waypoints-header">
          <h3>Waypoints</h3>
          <button type="button" class="btn-secondary" @click="addWaypoint">
            + Add
          </button>
        </div>

        <div class="waypoints-list">
          <WaypointForm
            v-for="(waypoint, index) in order.waypoints"
            :key="index"
            :waypoint="waypoint"
            @remove="removeWaypoint(index)"
          />
          <p v-if="order.waypoints.length === 0" class="text-muted">
            No waypoints added yet.
          </p>
        </div>
      </div>

      <div v-if="error" class="error-text">{{ error }}</div>

      <div class="form-actions">
        <button type="submit" class="btn-primary" :disabled="submitting">
          {{ submitting ? "Creating..." : "Create Order" }}
        </button>
        <router-link to="/" class="btn-text">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import WaypointForm from "./WaypointForm.vue";
import {
  createTransportOrder,
  CreateTransportOrder,
} from "../services/transportOrderService";

const router = useRouter();
const error = ref<string | null>(null);
const submitting = ref(false);

const order = reactive<CreateTransportOrder>({
  order_number: "",
  customer_name: "",
  date: "",
  waypoints: [],
});

// Function to add a new waypoint to the list
const addWaypoint = () => {
  order.waypoints.push({
    location: "",
    type: "pickup",
  });
};

const removeWaypoint = (index: number) => {
  order.waypoints.splice(index, 1);
};

const submitForm = async () => {
  if (order.waypoints.length === 0) {
    error.value = "Please add at least one waypoint.";
    return;
  }

  try {
    submitting.value = true;
    error.value = null;
    await createTransportOrder(order);
    router.push("/");
  } catch (err: any) {
    error.value = "Error creating transport order. Please try again.";
    console.error("Error creating transport order:", err);
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.max-w-lg {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.form-layout {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.waypoints-section {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: var(--border-radius);
  border: 1px dashed var(--border-color);
}

.waypoints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.waypoints-header h3 {
  margin: 0;
  font-size: 1rem;
}

.btn-secondary {
  background-color: white;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
}

.waypoints-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.text-muted {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}

.error-text {
  color: var(--error-color);
  font-size: 0.875rem;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-text {
  color: var(--text-secondary);
  font-weight: 500;
}

.btn-text:hover {
  color: var(--text-primary);
}
</style>
