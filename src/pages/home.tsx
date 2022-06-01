import { CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { SimpleCard } from "../components";
import { getRestaurants } from "../api/restaurant";
import { response } from "express";
import { RestaurantState } from "../models/restaurantModel";

function Home() {
  const [state, setState] = useState<RestaurantState>({
    status: "loading",
    data: [],
  });
  const getData = async () => {
    try {
      const response = await getRestaurants();
      setState({ status: "loading", data: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (state.status === "loading") {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {state.data.map((restaurant) => (
          <Grid item xs={12} sm={4} lg={3}>
            <SimpleCard
              title={restaurant.name}
              descripcion={restaurant.description}
              handleButton={() => console.log("Test")}
              image={restaurant.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
