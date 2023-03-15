import { Box, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { useAppSelector } from "../../hooks/redux";
import { currentTrackSelector } from "../../store/tracks";

export default function TrackingResult() {
  const currentTrack = useAppSelector(currentTrackSelector);

  if (Object.keys(currentTrack).length === 0) return null;

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        maxWidth: { xs: 480, sm: 600 },
        height: "fit-content",
        borderColor: cyan[400],
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        padding: 2,
      }}
    >
      {Object.keys(currentTrack).length ===
      0 ? null : currentTrack.StatusCode === 3 ? (
        <Typography align="left">{currentTrack.Status}</Typography>
      ) : (
        <>
          <Typography variant="body1">{currentTrack.Status}</Typography>
          <Typography variant="body1">
            <b>Адреса отримання: </b>
            {currentTrack.WarehouseRecipient}
          </Typography>
          <Typography variant="body1">
            <b>Адреса відправлення: </b>
            {currentTrack.WarehouseSender}
          </Typography>
        </>
      )}
    </Box>
  );
}
