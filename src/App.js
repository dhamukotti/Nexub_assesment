import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  TextField,
  InputAdornment,
  Badge,
  Avatar,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Drawer, Hidden } from "@mui/material";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Profile from "./Profile";

import Home from "./Home";
import Dashboard from "./Profile";

const CurvedPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[5],
  backgroundColor: "#ffffff",
  overflow: "hidden",
  height: "87vh",
}));

const menuItems = [
  { key: 1, icon: <HomeIcon />, label: "Menu One" },
  { key: 2, icon: <MessageIcon />, label: "Menu Two" },
  { key: 3, icon: <ListAltIcon />, label: "Menu Three" },
  { key: 4, icon: <FormatListNumberedIcon />, label: "Menu Four" },
  {
    key: 5,
    icon: <SettingsIcon />,
    label: "Menu Five",
    submenu: [
      { key: 1, label: "Submenu One" },
      { key: 2, label: "Submenu Two" },
      { key: 3, label: "Submenu Three" },
    ],
  },
  { key: 6, icon: <SettingsIcon />, label: "Menu Six" },
  { key: 7, icon: <SettingsIcon />, label: "Menu Seven" },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleClick = (key) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
        <List>
          {menuItems.map((item) => (
            <div key={item.key}>
              <ListItem
                button
                onClick={() => handleClick(item.key)}
                sx={{
                  backgroundColor: openSubmenus[item.key]
                    ? "#E8F4FE" // Light blue background when active
                    : "transparent",
                  color: openSubmenus[item.key] ? "#1976d2" : "#333",
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#E8F4FE" },
                  transition: "0.3s",
                  marginBottom: "4px",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: openSubmenus[item.key] ? "#1976d2" : "#1976d2",
                    fontSize: openSubmenus[item.key] ? "50px" : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: openSubmenus[item.key]
                          ? "bolder"
                          : "normal",
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                />
                {item.submenu && (
                  <ArrowDropDownCircleIcon
                    color="primary"
                    sx={{
                      transform: openSubmenus[item.key]
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "0.3s",
                    }}
                  />
                )}
              </ListItem>
              {/* Submenu items */}
              {item.submenu && (
                <Collapse
                  in={openSubmenus[item.key]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{
                      paddingLeft: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.key}
                        button
                        sx={{
                          paddingLeft: "24px",
                          color: "#1976d2",
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color: "#1976d2",
                                fontSize: "14px",
                              }}
                            >
                              {subItem.label}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "inherit ",
            color: "#000",
            boxShadow: "none",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" mr={4}>
              <div
                style={{
                  display: "block",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                UI Frontend
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "small",
                  lineHeight: 1,
                }}
              >
                Test
              </div>
            </Typography>

            <TextField
              placeholder="Quick Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      style={{ color: "#2695FB", fontSize: "21px" }}
                    />
                  </InputAdornment>
                ),
              }}
              size="small"
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
              }}
              sx={{ display: { xs: "none", sm: "block" } }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
                width: "100%",
                paddingRight: "16px",
                paddingTop: "8px",
              }}
            >
              {/* Help Icon */}
              <IconButton
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "8px",
                  display: { xs: "none", sm: "inherit" },
                }}
              >
                <HelpOutlineIcon sx={{ color: "#2196f3" }} />
              </IconButton>

              {/* Grid Icon */}
              <IconButton
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "8px",
                  display: { xs: "none", sm: "inherit" },
                }}
              >
                <GridViewIcon sx={{ color: "#2196f3" }} />
              </IconButton>

              {/* Notifications Icon with badge */}
              <IconButton
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "8px",
                  display: { xs: "none", sm: "inherit" },
                }}
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon sx={{ color: "#2196f3" }} />
                </Badge>
              </IconButton>

              {/* Avatar with dropdown arrow */}
              <Avatar
                alt="User"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <CurvedPaper>
            <Grid container spacing={2}>
              <Hidden smDown>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  sx={{
                    height: "calc(100vh - 64px)",
                    overflowY: "auto",
                    borderRight: "1px solid #f0f0f0",
                  }}
                >
                  {drawerContent}
                </Grid>
              </Hidden>

              {/* Drawer for mobile screens */}
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
                }}
              >
                {drawerContent}
              </Drawer>

              <Grid item xs={12} sm={10}>
                <Box
                  component="main"
                  sx={{
                    p: 3,
                    backgroundColor: "transparent",
                    height: "calc(100vh - 64px)", //
                    overflowY: "scroll",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:id" element={<Dashboard />} />
                  </Routes>
                </Box>
              </Grid>
            </Grid>
          </CurvedPaper>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
