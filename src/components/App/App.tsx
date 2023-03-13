import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ListToggle from "../ListToggle";
import InputField from "../InputField";
import History from "../History";

import "./App.css";

function App() {
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ListToggle />
        <InputField />
      </Box>
    </Container>
  );
}

export default App;
