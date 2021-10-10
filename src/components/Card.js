import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ flight }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        m: 2,
        maxWidth: 300,
      }}
    >
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {flight.mission_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {flight.rocket_name}
        </Typography>
        <Typography variant="body2">
          {flight.details}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href="">Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}
