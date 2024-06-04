import React from "react";
import { ServiceList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      {ServiceList.map((service, index) => (
        <Box key={index} sx={{ mb: 4, mt: index === 0 ? 8 : 0 }}>
          {/* Service Header */}
          <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: "center", mb: 2 }}>
            {service.name}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
            {service.description}
          </Typography>

          {/* Images Row */}
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {service.images.map((image, imgIndex) => (
              <Card key={imgIndex} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "200px" }}
                    component="img"
                    src={image}
                    alt={`${service.name} image ${imgIndex + 1}`}
                  />
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Layout>
  );
};

export default Menu;
