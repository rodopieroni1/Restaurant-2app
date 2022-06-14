import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "lem",
    minWidth: 250,
  },
  media: {
    heigt: "70vh",
  },
});

interface Props {
  title: string;
  descripcion: string;
  image: string;
  subDescripcion: any;
}

export const ViewCard = ({
  title,
  descripcion,
  image,
  subDescripcion,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" component="p" color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body1" component="p" color="text.secondary">
          {subDescripcion}
        </Typography>
      </CardContent>
    </Card>
  );
};
