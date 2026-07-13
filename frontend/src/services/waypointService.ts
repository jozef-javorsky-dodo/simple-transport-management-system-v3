import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

interface Waypoint {
  id: number;
  location: string;
  type: "pickup" | "delivery";
}

export const createWaypoint = async (waypoint: Waypoint): Promise<Waypoint> => {
  try {
    const response = await axios.post<Waypoint>(
      `${BASE_URL}waypoints/`,
      waypoint,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating waypoint:", error);
    throw error;
  }
};

export const listWaypoints = async (): Promise<Waypoint[]> => {
  try {
    const response = await axios.get<Waypoint[]>(`${BASE_URL}waypoints/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching waypoints:", error);
    throw error;
  }
};
