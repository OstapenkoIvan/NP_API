import { useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";

import ListToggle from "../ListToggle";
import InputField from "../InputField";
import History from "../History";
import TrackingResult from "../TrackingResult";
import CityList from "../CityList";

import "./App.css";

function App() {
  const [page, setPage] = useState("tracking");
  console.log(page);

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 300,
        }}
      >
        <ListToggle onChange={setPage} {...{ page }} />
        {page === "tracking" ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <InputField />
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: 480, sm: 1280 },
                  minWidth: 300,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <TrackingResult />
                <History />
              </Box>
            </Box>
          </>
        ) : (
          <CityList />
        )}
      </Box>
    </Container>
  );
}

export default App;
