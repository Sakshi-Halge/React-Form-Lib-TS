import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, Select, MenuItem, TextField, Typography } from "@mui/material";

const Example = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", px: 3, py: 6 }}>
      <Box sx={{ width: "100%", maxWidth: 720, display: "grid", gap: 3 }}>
        <Box>
          <Typography variant="h2">Material UI Theme Demo</Typography>
          <Typography variant="body1" color="text.secondary">
            This preview shows the custom palette, responsive typography, and component overrides.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          <Box sx={{ display: "grid", gap: 2 }}>
            <TextField label="Name" variant="outlined" fullWidth />
            <Select defaultValue="react" fullWidth>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="mui">MUI</MenuItem>
              <MenuItem value="typescript">TypeScript</MenuItem>
            </Select>
            <Button variant="contained">Primary Action</Button>
          </Box>

          <Box sx={{ display: "grid", gap: 2 }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Enabled feature" />
            <RadioGroup defaultValue="a" row>
              <FormControlLabel value="a" control={<Radio />} label="Option A" />
              <FormControlLabel value="b" control={<Radio />} label="Option B" />
            </RadioGroup>
            <Typography variant="caption" color="text.secondary">
              The typography and component styles are now coming from your custom theme.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Example