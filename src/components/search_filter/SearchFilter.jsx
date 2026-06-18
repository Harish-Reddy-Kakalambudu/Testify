import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import TextField from "../textfield/TextField";

const SearchFilter = ({
  value,
  onChange,
  placeholder = "Search...",
  width = "100%",
  height = "38px",
  className = "",
  ...props
}) => {
  return (
    <TextField
      {...props}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={<SearchOutlinedIcon />}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SearchFilter;
