import { Box, Typography, Container } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export const metadata = {
  title: "Dashboard | Admin Dashboard",
  description:
    "An interactive and comprehensive admin dashboard that provides real-time insights and management tools for efficient administration and monitoring of various aspects of your system or application.",
};

export default async function Index() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#191919",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#111111",
          padding: "1.25rem 1.875rem",
        }}
      >
        <Typography variant="h2" style={{ fontSize: "1.375rem" }}>
          System Config
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography style={{ fontSize: "1rem" }}>Jonathan</Typography>
          <ImageIcon />
        </Box>
      </Box>
    </Box>
  );
}
