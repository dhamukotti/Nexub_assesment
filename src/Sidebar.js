import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const SidebarContainer = styled(Box)({
  backgroundColor: "#e1e8ff", // Light blue background
  height: "100vh",
  padding: "20px 10px",
});

const SidebarHeader = styled(Typography)({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#000",
  marginBottom: "20px",
  textAlign: "center",
});

const SidebarMenuItem = styled(ListItem)({
  borderRadius: "10px",
  margin: "10px 0",
  "&:hover": {
    backgroundColor: "#c2d1ff",
  },
  "&.Mui-selected": {
    backgroundColor: "#8da4ff",
  },
});

const SidebarMenuText = styled(ListItemText)({
  color: "#000", // Text color
  fontWeight: "600",
});

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <SidebarContainer>
        <Toolbar />
        <SidebarHeader variant="h6">Team Panel</SidebarHeader>
        <List>
          {/* Dashboard Menu */}
          <SidebarMenuItem button selected>
            <ListItemIcon>
              <DashboardIcon style={{ color: "#000" }} />
            </ListItemIcon>
            <SidebarMenuText primary="Dashboard" />
          </SidebarMenuItem>

          {/* Team Menu */}
          <SidebarMenuItem button>
            <ListItemIcon>
              <GroupIcon style={{ color: "#000" }} />
            </ListItemIcon>
            <SidebarMenuText primary="Team" />
          </SidebarMenuItem>

          {/* Settings Menu */}
          <SidebarMenuItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: "#000" }} />
            </ListItemIcon>
            <SidebarMenuText primary="Settings" />
          </SidebarMenuItem>

          {/* Add more menu items as needed */}
        </List>
      </SidebarContainer>
    </Drawer>
  );
}

export default Sidebar;
