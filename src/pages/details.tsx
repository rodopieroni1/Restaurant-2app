import { Grid, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantsById } from "../api/restaurant";
import { ManageStatus, ViewCard } from "../components";
import { DetailState, RestaurantModel } from "../models/restaurantModel";
import { Form } from "./form";

const initDetail: RestaurantModel = {
  address: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  name: "",
  turn: [],
};

export const Details = () => {
  const [state, setState] = useState<DetailState>({
    status: "loading",
    data: initDetail,
  });
  const restaurant = state.data;
  const { idRestaurant } = useParams();
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        setState({ status: "loading", data: initDetail });
        const response = await getRestaurantsById(Number(idRestaurant));
        setState({ status: "succes", data: response.data });
      } catch (error) {
        setState({ status: "error", data: initDetail });
      }
    };

    getRestaurants();
  }, [idRestaurant]);

  return (
    <ManageStatus status={state.status}>
      <div
        style={{
          backgroundImage: "url(" + restaurant.image + ")",
          height: "100vh",
          width: "100wv",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg" style={{ paddingTop: "5vh" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} style={{ maxWidth: "35em" }}>
              <ViewCard
                title={restaurant.name}
                image={restaurant.image}
                descripcion={restaurant.description}
                subDescripcion={restaurant.address}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Form />
              {/* <div>Test</div> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ManageStatus>
  );
};
