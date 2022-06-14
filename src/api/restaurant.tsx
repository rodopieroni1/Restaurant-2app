import axios from "axios";

const URL = "http://localhost:8080/booking-restaurant/v1";
export const getRestaurants = () => {
  return axios.get(URL + "/restaurants").then(({ data }: any) => data);
};

export const getRestaurantsById = (id: number) => {
  return axios.get(URL + "/restaurants/" + id).then(({ data }: any) => data);
};
