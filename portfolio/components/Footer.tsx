"use client";

import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f3ef", // soft beige background
        color: "#5a3e36", // warm brown text
        py: 4,
        px: 2,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Yasitha Herath
            </Typography>
            <Typography variant="body2">Creative Web Developer</Typography>
          </Box>

          <Box>
            <Typography variant="body1" fontWeight={500}>
              Quick Links
            </Typography>
            <Link
              href="#about"
              underline="hover"
              color="inherit"
              display="block"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              underline="hover"
              color="inherit"
              display="block"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              underline="hover"
              color="inherit"
              display="block"
            >
              Contact
            </Link>
          </Box>

          <Box>
            <Typography variant="body1" fontWeight={500}>
              Follow Me
            </Typography>
            <Link
              href="https://github.com/yourusername"
              underline="hover"
              color="inherit"
              display="block"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              underline="hover"
              color="inherit"
              display="block"
            >
              LinkedIn
            </Link>
          </Box>
        </Box>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Yasitha Herath. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
