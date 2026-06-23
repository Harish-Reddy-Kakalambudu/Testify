import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const SettingsPanel = () => {
  return (
    <Box className="p-4 flex flex-col gap-5">

      <Box>
        <Typography className="text-main mb-2">
          Request Timeout (ms)
        </Typography>

        <TextField
          size="small"
          defaultValue="30000"
        />
      </Box>

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Follow Redirects"
      />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="SSL Verification"
      />

      <Box>
        <Typography className="text-main mb-2">
          Max Redirects
        </Typography>

        <TextField
          size="small"
          defaultValue="5"
        />
      </Box>
    </Box>
  );
};

export default SettingsPanel;