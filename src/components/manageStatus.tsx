import { Box, CircularProgress, Typography } from "@mui/material";
import React, { Children, ReactElement } from "react";

interface Props {
  status: "loading" | "succes" | "error";
  children: ReactElement;
}
export const ManageStatus = ({ status, children }: Props) => {
  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography style={{ padding: "0.5em" }} variant="button">
          Error Obteniendo Datos
        </Typography>
      </div>
    );
  }
  if (status === "succes") {
    return <Box>{children}</Box>;
  }
  return null;
};
