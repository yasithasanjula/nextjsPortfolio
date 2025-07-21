"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

const projects = [
  {
    title: "Corn Disease Diagnosis System",
    description:
      "A machine learning-based system to detect corn leaf diseases and provide actionable advice.",
    image: "/images/corn-project.jpg",
    tags: ["React", "Flask", "ML", "Tailwind CSS"],
  },
  {
    title: "Coffee Order App",
    description:
      "A cozy coffee ordering web app with a modern, soft UI. Built using Next.js and MUI.",
    image: "/images/coffee-app.jpg",
    tags: ["Next.js", "MUI", "TypeScript", "Poppins"],
  },
  {
    title: "Water Potability Analysis",
    description:
      "Data analysis and prediction of water potability using scikit-learn and data visualization tools.",
    image: "/images/water-quality.jpg",
    tags: ["Python", "Pandas", "scikit-learn", "F-statistic"],
  },
];

export default function ProjectsPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fdf6f1", // soft beige background
        py: 8,
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#3e2723", fontWeight: 600 }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  backgroundColor: "#fffaf4",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: "#4e342e", fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: "#6d4c41" }}>
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, flexWrap: "wrap" }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: "#e1cfc2",
                          color: "#4e342e",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
