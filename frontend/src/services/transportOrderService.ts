import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

export interface Waypoint {
  id?: number;
  location: string;
  type: "pickup" | "delivery";
}

export interface TransportOrder {
  id: number;
  order_number: string;
  customer_name: string;
  date: string;
  waypoints: Waypoint[];
}

export interface CreateTransportOrder {
  order_number: string;
  customer_name: string;
  date: string;
  waypoints: Waypoint[];
}

export const listTransportOrders = async () => {
  try {
    const response = await axios.get<TransportOrder[]>(
      `${BASE_URL}transport-orders/`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transport orders:", error);
    throw error;
  }
};

export const createTransportOrder = async (order: CreateTransportOrder) => {
  try {
    const response = await axios.post<TransportOrder>(
      `${BASE_URL}transport-orders/`,
      order,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating transport order:", error);
    throw error;
  }
};

export const getTransportOrder = async (id: number) => {
  try {
    const response = await axios.get<TransportOrder>(
      `${BASE_URL}transport-orders/${id}/`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching transport order ${id}:`, error);
    throw error;
  }
};

export const updateTransportOrder = async (
  id: number,
  order: CreateTransportOrder,
) => {
  try {
    const response = await axios.put<TransportOrder>(
      `${BASE_URL}transport-orders/${id}/`,
      order,
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating transport order ${id}:`, error);
    throw error;
  }
};

export const deleteTransportOrder = async (id: number) => {
  try {
    await axios.delete(`${BASE_URL}transport-orders/${id}/`);
  } catch (error) {
    console.error(`Error deleting transport order ${id}:`, error);
    throw error;
  }
};
