import axios from "axios";
import { response } from "express";

const URL = "http://localhost:8080/booking-restaurant/v1";
export const getRestaurants = () => {
  return axios.get(URL + "/restaurants").then(({ data }: any) => data);
};
