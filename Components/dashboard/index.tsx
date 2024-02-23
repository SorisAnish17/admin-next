"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DashboardComponent = () => {
  const [orderDate, setOrderDate] = React.useState("");
  const [abandonedOrder, setAbandonedOrder] = React.useState("");

  const handleOrderDate = (event: SelectChangeEvent) => {
    setOrderDate(event.target.value as string);
  };

  const handleAbandonedOrder = (event: SelectChangeEvent) => {
    setAbandonedOrder(event.target.value as string);
  };
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
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <Typography style={{ fontSize: "1rem" }}>Jonathan</Typography>
          <ImageIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Box>
          <Box sx={{ display: "flex", margin: "1rem" }}>
            <Box
              sx={{
                width: "34.375rem",
                height: "8.25rem",
                bgcolor: "#111111",
                textAlign: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <PeopleAltOutlinedIcon />
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "400rem",
                      lineHeight: "1.21rem",
                      color: "#FFFFFF",
                    }}
                  >
                    Suppliers
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#8B8D97" }}
                      style={{
                        fontSize: "0.875",
                        fontWeight: "400rem",
                        lineHeight: "1.059rem",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      1,250
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#8B8D97" }}>Active</Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      1,180
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", margin: "1rem" }}>
            <Box
              sx={{
                width: "34.375rem",
                height: "8.25rem",
                bgcolor: "#111111",
                textAlign: "center",
              }}
            >
              {" "}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <Box style={{ display: "flex", gap: "1rem" }}>
                    <ShoppingCartTwoToneIcon />
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "400rem",
                        lineHeight: "1.21rem",
                      }}
                    >
                      Orders
                    </Typography>
                  </Box>
                  <Box>
                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Date
                      </InputLabel>
                      <Select
                        labelId="demo-abandoned-select-label"
                        id="demo-abandoned-select"
                        value={orderDate}
                        onChange={handleOrderDate}
                        label="Date"
                        sx={{ color: "#E25319" }}
                      >
                        <MenuItem
                          value={10}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Weekly
                        </MenuItem>
                        <MenuItem
                          value={20}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Montly
                        </MenuItem>
                        <MenuItem
                          value={30}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Yearly
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#8B8D97" }}
                      style={{
                        fontSize: "0.875",
                        fontWeight: "400rem",
                        lineHeight: "1.059rem",
                      }}
                    >
                      All Orders
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      20
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#8B8D97" }}>Completed</Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      8
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", margin: "1rem" }}>
            <Box
              sx={{
                width: "34.375rem",
                height: "8.25rem",
                bgcolor: "#111111",
                textAlign: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <Groups2OutlinedIcon />
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "400rem",
                      lineHeight: "1.21rem",
                      color: "#FFFFFF",
                    }}
                  >
                    Customers
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#8B8D97" }}
                      style={{
                        fontSize: "0.875",
                        fontWeight: "400rem",
                        lineHeight: "1.059rem",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      1,250
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#8B8D97" }}>Active</Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      1,180
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", margin: "1rem" }}>
            <Box
              sx={{
                width: "34.375rem",
                height: "8.25rem",
                bgcolor: "#111111",
                textAlign: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <Box style={{ display: "flex", gap: "1rem" }}>
                    <RemoveShoppingCartOutlinedIcon />
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "400rem",
                        lineHeight: "1.21rem",
                        color: "#FFFFFF",
                      }}
                    >
                      Abandoned Orders
                    </Typography>
                  </Box>
                  <Box>
                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Date
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={abandonedOrder}
                        onChange={handleAbandonedOrder}
                        label="Date"
                        sx={{ color: "#E25319" }}
                      >
                        <MenuItem
                          value={10}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Weekly
                        </MenuItem>
                        <MenuItem
                          value={20}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Montly
                        </MenuItem>
                        <MenuItem
                          value={30}
                          sx={{
                            color: "#E25319",
                            backgroundColor: "#111111",
                          }}
                        >
                          Yearly
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ color: "#E25319" }}
                      style={{
                        fontSize: "0.875",
                        fontWeight: "400rem",
                        lineHeight: "1.059rem",
                      }}
                    >
                      Orders
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      20
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#8B8D97" }}>Customers</Typography>
                    <Typography sx={{ fontSize: "1.25rem", color: "#45464E" }}>
                      8
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
