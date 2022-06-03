import { Grid, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SimpleCard } from "../components";
import { getRestaurants } from "../api/restaurant";
import { RestaurantState } from "../models/restaurantModel";
import { ManageStatus } from "../components/manageStatus";

function Home() {
  const [state, setState] = useState<RestaurantState>({
    status: "loading",
    data: [],
  });
  const getData = async () => {
    try {
      setState({ status: "loading", data: [] });
      const response = await getRestaurants();
      setState({ status: "succes", data: response.data });
    } catch (error) {
      setState({ status: "error", data: [] });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ManageStatus status={state.status}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {state.data.map((restaurant) => (
            <Grid item xs={12} sm={4} lg={3}>
              <SimpleCard
                title={restaurant.name}
                descripcion={restaurant.description}
                handleButton={() => console.log("Test29")}
                image={restaurant.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ManageStatus>
  );
}

export default Home;
