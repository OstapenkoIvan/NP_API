import { SetStateAction, Dispatch } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({
  onChange,
  page,
}: {
  onChange: Dispatch<SetStateAction<string>>;
  page: string;
}) {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    onChange(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={page}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="tracking">Перевірити ТТН</ToggleButton>
      <ToggleButton value="warehouses">Список відділень</ToggleButton>
    </ToggleButtonGroup>
  );
}
