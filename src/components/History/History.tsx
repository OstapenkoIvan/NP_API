import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
} from "@mui/material";
import { cyan } from "@mui/material/colors";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  tracksSelector,
  showSelected,
  currentTrackSelector,
} from "../../store/tracks";
import { ITracksState } from "../../types/np.types";

export default function History() {
  const trackList = useAppSelector(tracksSelector);
  const currentTrack = useAppSelector(currentTrackSelector);
  const dispatch = useAppDispatch();
  const isCurrent = Object.keys(currentTrack).length > 0;

  const handleClick = (num: number) => {
    dispatch(showSelected(num));
  };

  return (
    <Box
      sx={{
        display: trackList.length > 0 ? "block" : "none",
        flexShrink: 0,
        width: { xs: "100%", sm: isCurrent ? 200 : 310 },
        borderColor: cyan[400],
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        padding: 2,
      }}
    >
      <Typography>Історія</Typography>
      <List>
        {trackList.map((item: ITracksState) => (
          <ListItem
            key={item._id}
            sx={{
              padding: 0,
            }}
          >
            <ListItemButton onClick={(e) => handleClick(item.Number)}>
              <ListItemText
                primary={item.Number}
                secondary={item.createdAt?.split("T")[0]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
