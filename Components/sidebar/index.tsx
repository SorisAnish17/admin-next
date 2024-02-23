"use client";
import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { SideBarListItem } from "../sidebar/item-list";

interface SideBarProps {
  readonly sidebarWidth: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { sidebarWidth } = props;

  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: sidebarWidth,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Toolbar sx={{ display: "flex" }}>
            <Box>
              <Typography>LOGO</Typography>
              <Typography sx={{ fontSize: "1rem" }}>Galley Cloud</Typography>
            </Box>
          </Toolbar>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
              margin: "0.75rem",
            }}
          >
            <Box>
              <Box>
                <Box sx={{ margin: "0.5rem 0.75rem" }}>
                  <Typography variant="caption">Platform</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <SideBarListItem
                    icon={ImageIcon}
                    title="Dashboard"
                    path="/homedashboard"
                  />
                  <SideBarListItem
                    icon={ImageIcon}
                    title="AllOrders"
                    path="/homedashboard/allorders"
                  />
                  <SideBarListItem
                    icon={ImageIcon}
                    title="Buyers"
                    path="/homedashboard/buyers"
                  />
                  <SideBarListItem
                    icon={ImageIcon}
                    title="Support"
                    path="/homedashboard/support"
                  />
                  <SideBarListItem
                    icon={ImageIcon}
                    title="System ConFigs"
                    path="/homedashboard/systemconfigs"
                  />
                </Box>
              </Box>
              <Divider
                sx={{
                  margin: "1rem 0rem",
                  border: "solid #FFFFFF 0.2px",
                  borderRadius: "1px",
                }}
              />
              <Box>
                <Box sx={{ margin: "0.5rem 0.75rem" }}>
                  <Typography variant="caption">Admin</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <SideBarListItem
                    icon={ImageIcon}
                    title="Accout"
                    path="/homedashboard/account"
                  />
                  <SideBarListItem
                    icon={ImageIcon}
                    title="Staffs"
                    path="/homedashboard/staffs"
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <SideBarListItem
                icon={ImageIcon}
                title="Sign Out"
                path="/email-verify"
                onClick={() => {
                  console.log("sign out");
                }}
              />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export { SideBar };
