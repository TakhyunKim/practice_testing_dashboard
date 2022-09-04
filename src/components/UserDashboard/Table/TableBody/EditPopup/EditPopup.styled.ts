import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "10rem",
  border: "1px solid #efefef",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
});

export const Button = styled(MuiButton)({
  justifyContent: "left",
  paddingLeft: "1rem",
  fontSize: "0.8rem",
});
