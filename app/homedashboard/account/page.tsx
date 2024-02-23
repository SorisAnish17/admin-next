import { Box, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Image from "next/image";
import ProfileImg from "../../../public/admin img.png";
import CreateIcon from "@mui/icons-material/Create";

export const metadata = {
  title: "Dashboard | Admin Dashboard",
  description:
    "An interactive and comprehensive admin dashboard that provides real-time insights and management tools for efficient administration and monitoring of various aspects of your system or application.",
};

export default async function Account() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#191919",
        position: "relative",
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
          Accounts
        </Typography>
        <Box sx={{ display: "flex" }}>
          <ImageIcon />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "1.25rem 1.875rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "11.25rem",
            backgroundImage: "url(/ce3926fe5c1d25d860f40af766ec2040.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "1.25rem 1.875rem",
          }}
        ></Box>
        <Box
          sx={{
            border: "3px solid white",
            borderRadius: "6.25rem",
            width: "10rem",
            position: "absolute",
            top: "9rem",
            left: "3.5rem",
          }}
        >
          <Image
            src={ProfileImg}
            alt="profile-img"
            style={{
              width: "10rem",
              height: "10rem",
              borderRadius: "6.25rem",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "3.8rem",
            backgroundColor: "#111111",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                gap: "0.8rem",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700rem",
                  lineHeight: "1.688rem",
                }}
              >
                Jonathan Brus
              </Typography>
              <Typography
                style={{
                  fontWeight: "43.75rem",
                  lineHeight: "1.25rem",
                  fontSize: "0.9rem",
                }}
              >
                - Super Admin
              </Typography>
            </Box>
            <Typography>jonathanburs966@gmail.com</Typography>
            <Typography>+971 505403495</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
