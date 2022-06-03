import axios from "axios";

const URL = "http://localhost:8080/booking-restaurant/v1";
export const getRestaurants = () => {
  return axios.get(URL + "/restaurants").then(({ data }: any) => data);
};
