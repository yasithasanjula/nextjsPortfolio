"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fdf6f1", // soft beige
        minHeight: "100vh",
        py: 8,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            p: 4,
            backgroundColor: "#fffaf5",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#4b3f2f", fontWeight: 600 }}
          >
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ color: "#5a5144", mb: 4 }}>
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                required
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                required
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={5}
                variant="outlined"
                required
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#8B5E3C",
                  color: "#fff",
                  px: 4,
                  borderRadius: 8,
                  "&:hover": {
                    backgroundColor: "#704930",
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
