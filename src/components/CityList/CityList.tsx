import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, ListItem, ListItemText, List, TextField } from "@mui/material";
import { cyan } from "@mui/material/colors";

import useDebounce from "../../hooks/useDebounce";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  warehousesSelector,
  totalWarehousesSelector,
  getWarehouseQuery,
  getWarehouseNext,
  fetchWarehouses,
} from "../../store/warehouses";

import { IWhState } from "../../types/np.types";

export default function CityList() {
  const [queryData, setQueryData] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(queryData, 500);

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getWarehouseQuery({ queryData: debouncedValue, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, debouncedValue]);

  const warehouseList = useAppSelector(warehousesSelector);
  const totalCount = useAppSelector(totalWarehousesSelector);
  const hasMore = warehouseList.length >= totalCount ? false : true;

  const handleChangle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setQueryData(e.target.value);
  };

  const fetchWarehouse = () => {
    setPage((page) => page + 1);
    dispatch(getWarehouseNext({ queryData, page }));
  };

  return (
    <Box
      sx={{
        mt: 2,
        flexShrink: 0,
        width: { xs: "100%", sm: 310 },
        minWidth: 300,
        borderColor: cyan[400],
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        padding: 2,
      }}
    >
      <TextField
        margin="normal"
        size="small"
        id="warehouse"
        label={"Введіть назву міста"}
        name="warehouse"
        autoFocus
        value={queryData}
        onChange={handleChangle}
        sx={{
          flexGrow: 1,
          width: "100%",
          maxWidth: { xs: 480, sm: 600 },
          marginY: { xs: 0 },
        }}
      />
      <List>
        <InfiniteScroll
          dataLength={warehouseList.length}
          next={fetchWarehouse}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: "center" }}>Loading.....</h4>}
        >
          {warehouseList.map((item: IWhState) => (
            <ListItem
              key={item._id}
              sx={{
                padding: 0,
              }}
            >
              <ListItemText
                primary={item.ShortAddress}
                secondary={`Відділення: ${item.Number}`}
              />
            </ListItem>
          ))}
        </InfiniteScroll>
      </List>
    </Box>
  );
}
