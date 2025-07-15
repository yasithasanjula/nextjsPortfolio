"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fdf6f1", // soft beige background
        minHeight: "100vh",
        py: 8,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#5e4635", // soft brown
            mb: 4,
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Your Name"
              src="/profile.jpg" // Add your image to the public folder
              sx={{ width: 200, height: 200, mx: "auto", boxShadow: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{ color: "#4e4036", lineHeight: 1.8 }}
            >
              Hello! I’m <strong>Your Name</strong>, a passionate full-stack
              developer with a focus on creating beautiful, responsive, and
              user-friendly web applications. I specialize in technologies like
              React, Next.js, TypeScript, and Node.js.
              <br />
              <br />
              My mission is to bring ideas to life through thoughtful design and
              clean code. Whether it's building a portfolio, launching a startup
              idea, or contributing to open source — I thrive on challenges and
              continuous learning.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: "#d8cfc7" }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#5e4635", fontWeight: 500 }}
        >
          Skills & Tools
        </Typography>
        <Typography variant="body1" sx={{ color: "#4e4036" }}>
          • Frontend: React, Next.js, TypeScript, Tailwind CSS, Material UI
          <br />
          • Backend: Node.js, Express, Flask, Firebase
          <br />• Tools: Git, GitHub, Vercel, Figma, Postman
        </Typography>

        <Divider sx={{ my: 5, borderColor: "#d8cfc7" }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#5e4635", fontWeight: 500 }}
        >
          Let's Connect
        </Typography>
        <Typography variant="body1" sx={{ color: "#4e4036" }}>
          I'm always open to discussing projects, ideas, or opportunities to
          collaborate. Feel free to <strong>reach out</strong> via my contact
          page or connect with me on social media.
        </Typography>
      </Container>
    </Box>
  );
}
