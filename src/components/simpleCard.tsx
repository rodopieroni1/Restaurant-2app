import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  descripcion: string;
  handleButton: () => void;
  image: string;
}

export const SimpleCard = ({
  title,
  descripcion,
  handleButton,
  image,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="p" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="details/1">
          <Button size="small" color="primary" onClick={handleButton}>
            Acceder
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
