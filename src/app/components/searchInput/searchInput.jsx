import React from "react";
import { Box, TextField } from "@mui/material";

export default function SearchInput() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        mx: "250px",
        mt: -3,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-search" label="Search field" type="search" sx={{ flexGrow: 1 }} />
    </Box>
  );
}
