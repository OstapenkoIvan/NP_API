import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InputField() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        mt: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <TextField
        margin="normal"
        size="small"
        required
        error={false}
        id="ttn"
        label="tracking number"
        name="ttn"
        autoFocus
        sx={{ width: 400 }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, width: 200 }}
      >
        Get status TTN
      </Button>
    </Box>
  );
}
