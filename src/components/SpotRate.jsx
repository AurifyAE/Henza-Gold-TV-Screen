import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSpotRate } from "../context/SpotRateContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SpotRate = () => {
  const { goldData, silverData } = useSpotRate();

  const getBackgroundColor = (change) => {
    if (change === "up") {
      return "#22c55e"; // Green color for increase
    } else if (change === "down") {
      return "#ef4444"; // Red color for decrease
    }
    return "black";
  };

  const getColor = (change) => {
    return "white"; // Always white text for contrast
  };

  const renderSpotSection = (metal, data) => (
    <Box
      sx={{
        marginBottom: "3rem",
      }}
    >
      {/* Metal heading */}
      <Typography
        sx={{
          color: metal === 'GOLD' ? "#D1A44F" : "C0C0C0C",
          fontSize: metal === 'GOLD' ? "1.8rem" : "1.3rem",
          fontWeight: "600",
          marginBottom: "0.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          textAlign: "left",
        }}
      >
        {metal} Oz
      </Typography>

      {/* Spot rate columns */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          textAlign: "left"
        }}
      >
        {/* BID Column */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          {/* BID Label */}
          <Typography
            sx={{
              color: "#D1A44F",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            BID
          </Typography>

          {/* BID Value Box */}
          <Box
            sx={{
              width: "15vw",
              height: metal === 'GOLD' ? "70px" : "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              backgroundColor: getBackgroundColor(data.bidChanged),
              border: "2px solid #D1A44F",
              marginBottom: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: getColor(data.bidChanged),
                fontSize: metal === 'GOLD' ? "3vw" : "2vw",
                fontWeight: "bold",
              }}
            >
              {data.bid}
            </Typography>
          </Box>

          {/* LOW Value */}
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "1.2vw",
            }}
          >
            LOW {data.low}
          </Typography>
        </Box>

        {/* ASK Column */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          {/* ASK Label */}
          <Typography
            sx={{
              color: "#D1A44F",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            ASK
          </Typography>

          {/* ASK Value Box */}
          <Box
            sx={{
              width: "15vw",
              height: metal === 'GOLD' ? "70px" : "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              backgroundColor: getBackgroundColor(data.askChanged),
              border: "2px solid #D1A44F",
              marginBottom: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: getColor(data.askChanged),
                fontSize: metal === 'GOLD' ? "3vw" : "2vw",
                fontWeight: "bold",
              }}
            >
              {data.ask}
            </Typography>
          </Box>

          {/* HIGH Value */}
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "1.2vw",
            }}
          >
            HIGH {data.high}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "white",
        padding: "0rem",
        borderRadius: "8px",
        maxWidth: "100%",
        marginTop: "20px",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography
          sx={{
            fontSize: "1.8vw",
            fontWeight: "bold",
            color: "#FFFFFF",
            marginBottom: "0.5rem",
            background: "linear-gradient(to right, #D1A44F 0%, #000000 100%)",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          SPOT RATE
        </Typography>
      </Box>

      {/* Spot rates */}
      <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
        {renderSpotSection("GOLD", goldData)}
        {renderSpotSection("SILVER", silverData)}
      </Box>
    </Box>
  );
};

export default SpotRate;