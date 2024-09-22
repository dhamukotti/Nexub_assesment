import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Avatar,
  Box,
  Breadcrumbs,
  TextField,
  Link,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./home.css";
import { styled } from "@mui/system";

// Custom styles for the avatar with a border and status indicator
const AvatarContainer = styled(Box)({
  position: "relative",
  display: "inline-block",
  width: 60,
  height: 60,
  borderRadius: "50%",
  border: "1px solid #00bfff",
  padding: "4px",
});

const StatusDot = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 12,
  height: 12,
  backgroundColor: "#ff3d00", // Offline status
  borderRadius: "50%",
  border: "2px solid white",
});

const StatusDotOnline = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 12,
  height: 12,
  backgroundColor: "green", // Online status
  borderRadius: "50%",
  border: "2px solid white",
});

const members = [
  {
    id: 1,
    name: "Victor",
    title: "UI UX Team Lead",
    bgColor: "#f0f9ff",
    textColor: "#51AAFC",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Alexa",
    title: "Sr. UI UX Designer",
    bgColor: "#f0f9ff",
    textColor: "#51AAFC",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Juliet",
    title: "Blockchain Dev. Team Lead",
    bgColor: "#fff7e6",
    textColor: "#F9A602",
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 4,
    name: "Hina",
    title: "QA Team Lead",
    bgColor: "#fff7e6",
    textColor: "#F9A602",
    imageUrl: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 5,
    name: "Steve",
    title: "UI UX Team Manager",
    bgColor: "#f0f9ff",
    textColor: "#51AAFC",
    imageUrl: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 6,
    name: "Andrielle",
    title: "Sr. UI UX Designer",
    bgColor: "#f0f9ff",
    textColor: "#51AAFC",
    imageUrl: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 7,
    name: "Billie",
    title: "Blockchain Dev. Team Manager",
    bgColor: "#fff7e6",
    textColor: "#F9A602",
    imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 8,
    name: "Alita",
    title: "QA Team Manager",
    bgColor: "#fff7e6",
    textColor: "#F9A602",
    imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sx={{ p: 0, m: 0 }}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link underline="hover" color="inherit" href="/">
              Project Frontend
            </Link>
            <Typography color="textPrimary">Project Members</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ p: 0, mb: 2 }}>
          <Typography variant="h5" color="initial" fontWeight={600} py={0.5}>
            Project Members
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} sx={{ p: 0, m: 0 }}>
          <TextField
            placeholder="search 08 employees"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#2695FB", fontSize: "21px" }} />
                </InputAdornment>
              ),
            }}
            size="small"
            style={{
              width: "100%",
              borderRadius: "30px",
            }}
          />
        </Grid>

        {members.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.id}>
            <Card
              style={{
                backgroundColor: member.bgColor,
                textAlign: "center",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <AvatarContainer>
                <Avatar
                  alt={member.name}
                  src={member.imageUrl}
                  sx={{ width: 50, height: 50 }}
                />
                {member.id % 2 === 0 ? <StatusDotOnline /> : <StatusDot />}{" "}
                {/* Randomize status */}
              </AvatarContainer>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    marginBottom: "10px",
                    fontWeight: "600",
                    color: member.textColor,
                  }}
                >
                  {member.title}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/profile/${member.id}`)}
                  style={{
                    borderRadius: "10px",
                    border: "1px solid skyblue",
                    color: "black",
                    textTransform: "none",
                    padding: "5px 20px",
                    backgroundColor: "white",
                  }}
                  fullWidth
                >
                  Visit Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
