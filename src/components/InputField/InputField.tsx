import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../hooks/redux";
import { addTrack, fetchTracks } from "../../store/tracks";

export default function InputField() {
  const dispatch = useAppDispatch();
  const [trackNumber, setTrackNumber] = useState("");
  const [trackError, setTrackError] = useState(false);
  const [trackLabel, setTrackLabel] = useState("Tracking number");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (trackNumber.length < 14) {
      setTrackError(true);
      setTrackLabel("Number should be 14 characters long");
      return;
    }
    await dispatch(addTrack({ number: String(trackNumber) }));
    await dispatch(fetchTracks());
  };

  const handleChangle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const parsedInt = parseInt(value);

    if (Number.isFinite(parsedInt)) {
      const res = String(parsedInt);
      if (res.length > 14) {
        return;
      }
      if (trackError) {
        setTrackError(false);
      }
      if (trackLabel !== "Tracking number") {
        setTrackLabel("Tracking number");
      }
      setTrackNumber(String(parsedInt));
    }

    if (value === "") {
      setTrackNumber("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        width: "100%",
        maxWidth: { xs: 480, sm: 1280 },
        minWidth: 300,
        marginY: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <TextField
        margin="normal"
        size="small"
        required
        error={trackError}
        id="ttn"
        label={trackLabel}
        name="ttn"
        autoFocus
        value={trackNumber}
        onChange={handleChangle}
        sx={{
          flexGrow: 1,
          width: "100%",
          maxWidth: { xs: 480, sm: 600 },
          marginY: { xs: 0 },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ marginY: 0, width: 200, flexShrink: 0 }}
      >
        Get status TTN
      </Button>
    </Box>
  );
}
