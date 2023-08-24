import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppContext } from "../../hooks/AppContext";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CustomProgressBar() {
  const { profile, progress, setProgress } = useAppContext();

  React.useEffect(() => {
    let value = 0;
    if (profile.first_name) {
      value += 8;
    }
    if (profile.last_name) {
      value += 8;
    }
    if (profile.gender) {
      value += 8;
    }
    if (profile.interests) {
      value += profile.interests.length * 10;
    }
    if (profile.diseases) {
      value += profile.diseases.length * 10;
    }
    if (profile.locations) {
      if (profile.locations.longitude) value += 8;
      if (profile.locations.latitude) value += 8;
    }
    setProgress(value);
  }, [profile]);

  return <CircularProgressWithLabel value={progress} />;
}