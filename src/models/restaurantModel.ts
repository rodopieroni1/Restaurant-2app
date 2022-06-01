import { BaseState } from "./baseState";

export interface TurnModel {
  description: string;
  id: number;
}

export interface RestaurantModel {
  address: string;
  description: string;
  id: number;
  image: string;
  price: number;
  name: string;
  turn: TurnModel;
}

export interface RestaurantState extends BaseState {
  data: RestaurantModel[];
}
