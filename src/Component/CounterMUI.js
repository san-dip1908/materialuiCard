import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
// import { blue } from "@mui/material/colors";

const CounterMUI = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <Box sx={{ width: "40%", margin: "auto" }}>
      <Card classname="card" variant="outlined" sx={{ height: "300px" }}>
        <Box>
          <Typography className="count-content">
            Count:
            <div style={{ color: count % 2 === 0 ? "green" : "red" }}>
              {count}
            </div>
            <br></br>
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            {count % 2 === 0 ? <p>Count is even</p> : <p>Count is odd</p>}
          </Box>
        </Box>
        <Box className="btn-content">
          <button className="btn1" onClick={handleSubtract}>
            <ArrowBackIosNewIcon />
          </button>
          <button onClick={handleReset}>
            <RestartAltIcon />
          </button>
          <button className="btn3" onClick={handleAdd}>
            <ArrowForwardIosIcon />
          </button>
        </Box>
      </Card>
    </Box>
  );
};

export default CounterMUI;
