import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ExpandLess,
  ExpandMore,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const Sidebar2 = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    { key: 1, icon: <HomeIcon />, label: "Menu One" },
    {
      key: 2,
      icon: <MessageIcon />,
      label: "Menu Two",
      submenu: [
        { key: 1, label: "Submenu One" },
        { key: 2, label: "Submenu Two" },
      ],
    },
    { key: 3, icon: <ListAltIcon />, label: "Menu Three" },
    { key: 4, icon: <FormatListNumberedIcon />, label: "Menu Four" },
    {
      key: 5,
      icon: <SettingsIcon />,
      label: "Menu Five",
      submenu: [
        { key: 1, label: "Submenu one" },
        { key: 2, label: "Submenu two" },
        { key: 3, label: "Submenu three" },
      ],
    },
    { key: 6, icon: <SettingsIcon />, label: "Menu Six" },
    { key: 7, icon: <SettingsIcon />, label: "Menu Seven" },
  ];

  return (
    <Drawer open={open} onClose={handleClick}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.key} button onClick={handleClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            {item.submenu && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.key} button>
                      <ListItemText primary={subItem.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar2;
