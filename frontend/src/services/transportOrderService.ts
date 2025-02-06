import axios from 'axios';

const BASE_URL = 'https://cluster-y3hcuavp7vb.cloudworkstations/';

export interface Waypoint {
  id: number;
  location: string;
  type: 'Pickup' | 'Delivery';
}

export interface TransportOrder {
  id: number;
  order_number: string;
  customer_name: string;
  date: string;
  waypoints: Waypoint[];
}

export const listTransportOrders = async () => {
  try {
    const response = await axios.get<TransportOrder[]>(`${BASE_URL}transport-orders/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transport orders:', error);
    throw error;
  }
};


export const createTransportOrder = async (order: TransportOrder) => {
  try {
    const response = await axios.post<TransportOrder>(`${BASE_URL}transport-orders/`, order);
    return response.data;
  } catch (error) {
    console.error('Error creating transport order:', error);
    throw error;
  }
};