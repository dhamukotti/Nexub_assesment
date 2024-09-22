import React from "react";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import StarIcon from "@mui/icons-material/Star";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import img from "./Capture.JPG";

function Dashboard() {
  const taskData = {
    completed: 55,
    incomplete: 30,
    overdue: 15,
  };

  return (
    <Box sx={{ padding: "20px" }} mb={5}>
      {/* Profile Header */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <img
            alt="kdj"
            src="https://randomuser.me/api/portraits/women/68.jpg" // Replace with your real image URL
            style={{ width: 155, height: 155, borderRadius: "25px" }}
          />
        </Grid>
        <Grid item>
          <Chip
            label="Member"
            color="primary"
            size="small"
            sx={{ p: 0, m: 0 }}
          />
          <Typography
            variant="h6"
            style={{
              display: "block",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
            fontWeight="bold"
          >
            Welcome, Alexa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" fontWeight={'500'}>
            Manage your info, privacy, and security to make Frontend work better
            for you. <span style={{ color: "#4379F2", }}>Learn more</span>
          </Typography>
        </Grid>
      </Grid>

      {/* Ratings and Task Summary */}
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {/* Ratings */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack
                item
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
              >
                <Typography variant="h6" fontWeight="bold">
                  Ratings
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#2196f3",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ModeEditIcon sx={{ color: "white", fontSize: "14px" }} />
                </IconButton>
              </Stack>
              <Stack
                item
                justifyContent={"center"}
                alignItems={"center"}
                px={2}
              >
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Grid item>
                    <Avatar
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" fontWeight="bold">
                      Batosh
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight="bold"
                    >
                      CEO
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} sx={{ color: "#FFC107" }} />
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginTop: "10px" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam
                  ornare massa. Volutpat commodo elementum ipsum lectus.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Task Summary */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={2}
            sx={{
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "white",
              p: 0, // Ensure the main background stays white
            }}
          >
            {/* Left Circular Image */}
            <Box
              sx={{
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
                backgroundColor: "white", // Keep the image background white
              }}
            >
              <img
                src={img}
                alt="Task status icon"
                style={{
                  margin: 50,
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Right Text with Light Orange Background */}
            <Box
              sx={{
                flex: 1, // Make the right side take up the remaining space
                py: 3,
                px: 2,
                m: 0,
                backgroundColor: "#FFFAF0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: "47px",
                boxShadow: "0px 0px 15px 0px #0000000D",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, my: 1 }}>
                All task by complete status
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#007bff",
                    fontWeight: "bold",
                    py: 1,
                    fontSize: "14px",
                  }}
                >
                  55% <span style={{ color: "black" }}>Completed Task</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#ff9900",
                    fontWeight: "bold",
                    pb: 1,
                    fontSize: "14px",
                  }}
                >
                  30% <span style={{ color: "black" }}>Incompleted Task</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#ff6666",
                    fontWeight: "bold",
                    pb: 1,
                    fontSize: "14px",
                  }}
                >
                  15% <span style={{ color: "black" }}>Over due</span>
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Task Lists */}
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {/* Current & Upcoming */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ p: 0, m: 0 }}>
            <CardContent sx={{ p: 0, m: 0 }}>
              {/* Card Heading */}
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#F7F7F7",
                  p: 2,
                  m: 0,
                }}
              >
                Current & Upcoming
              </Typography>
              <div style={{ maxHeight: "350px", overflow: "scroll" }}>
                {/* Reusable TaskCard Component */}
                <TaskCard status="High" />
                <TaskCard status="High" />
                <TaskCard status="High" />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ p: 0, m: 0 }}>
            <CardContent sx={{ p: 0, m: 0 }}>
              {/* Card Heading */}
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#F7F7F7",
                  p: 2,
                  m: 0,
                }}
              >
                Completed
              </Typography>
              <div style={{ maxHeight: "350px", overflow: "scroll" }}>
                {/* Reusable TaskCard Component */}
                <TaskCard status="Low" bgcolor="#ECFFF4" textcr="#1CCE66" />
                <TaskCard status="Low" bgcolor="#ECFFF4 " textcr="#1CCE66" />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ p: 0, m: 0 }}>
            <CardContent sx={{ p: 0, m: 0 }}>
              {/* Card Heading */}
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#F7F7F7",
                  p: 2,
                  m: 0,
                }}
              >
                Failed
              </Typography>
              <div style={{ maxHeight: "350px", overflow: "scroll" }}>
                {/* Reusable TaskCard Component */}
                <TaskCard status="Medium" bgcolor="#FFF6F6" />
                <TaskCard status="Medium" bgcolor="#FFF6F6" />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

// Reusable Task Card Component
const TaskCard = ({ status, bgcolor, textcr }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px",
      marginBottom: "10px",
      borderRadius: "10px",
      backgroundColor: bgcolor,
      border: "1px solid #e0e0e0",
      m: 2,
    }}
  >
    {/* Left side - Icon and Text */}
    <Box display="flex" alignItems="center">
      {/* Placeholder for Icon */}

      {/* Task Information */}
      <Box>
        <Typography variant="body1" fontWeight="bold" sx={{ color: textcr }}>
          ZEN Roadmap, Boards backlog & Test Hub
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          fontWeight={"bold"}
          display="flex"
          alignItems="center"
          justifyContent={"flex-start"}
          sx={{ gap: 2 }}
        >
          <TextSnippetIcon style={{ color: "#1CCE66" }} /> ZEN-01{" "}
          <Chip
            label={status}
            size="small"
            sx={{
              backgroundColor: "#ffeaea", // Light red background
              color: "#ff6666", // Red text
              fontWeight: "bold",
            }}
          />
        </Typography>
      </Box>
    </Box>

    {/* Right side - Status Chip */}
  </Box>
);

export default Dashboard;
