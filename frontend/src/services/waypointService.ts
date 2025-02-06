import axios from 'axios';

const BASE_URL = 'https://cluster-y34ecqenfhcuavp7vbnxv7x.cloudworkstations/';

interface Waypoint {
  id: number;
  location: string;
  type: 'Pickup' | 'Delivery';
}

export const createWaypoint = async (waypoint: Waypoint): Promise<Waypoint> => {
  try {
    const response = await axios.post<Waypoint>(`${BASE_URL}waypoints/`, waypoint);
    return response.data;
  } catch (error) {
    console.error('Error creating waypoint:', error);
    throw error;
  }
};

export const listWaypoints = async (): Promise<Waypoint[]> => {
  try {
    const response = await axios.get<Waypoint[]>(`${BASE_URL}waypoints/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching waypoints:', error);
    throw error;
  }
};