import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import moment from "moment";

export default function BasicCard({ flight }) {
  let date = new Date(flight.launch_date_utc).toDateString();
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
        <Typography variant="h5" component="div">
          {flight.mission_name}
        </Typography>

        <Typography variant="h6" component="div" color="tomato">
          {flight.rocket.rocket_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {flight.rocket_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {moment(date).calendar()}
        </Typography>
        <Typography variant="body2" color="gray">
          {flight.details ? (
            <p>{flight.details}</p>
          ) : (
            <p>No details available</p>
          )}
          <br />
        </Typography>
      </CardContent>

      <CardActions>
        <Link component="button" variant="button">
          Read more
        </Link>
      </CardActions>
    </Card>
  );
}
