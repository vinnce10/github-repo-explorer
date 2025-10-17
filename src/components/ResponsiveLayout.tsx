import React from "react";
import { Grid } from "@mui/material";
import UserList from "./UserList";

const ResponsiveLayout: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid sx={{ xs: 12, md: 4 }}>
        <UserList id={1}/> 
      </Grid>
      <Grid sx={{ xs: 12, md: 4 }}>
        <UserList id={2}/> 
      </Grid>
      <Grid sx={{ xs: 12, md: 4 }}>
         <UserList id={3}/> 
      </Grid>
    </Grid>
  );
};

export default ResponsiveLayout;
