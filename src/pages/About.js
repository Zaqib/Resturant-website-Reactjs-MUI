import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import '../App.css';

const About = () => {
  return (
    <Layout>
      <Box className="about-container">
        <Typography variant="h4">Welcome To ERESTA EVIDENTE</Typography>
        <p>
          At ERESTA EVIDENTE, we pride ourselves on providing high-quality labor services across various sectors in Portugal.
        </p>
        <br />
        <p>
          Our mission is to connect skilled workers with businesses and individuals in need of reliable and professional labor for dairy farming,
          agriculture, solar panel installation, and construction. We are dedicated to helping our clients achieve their goals with the best workforce available.
        </p>
        <br />
        <Typography variant="h5">Our Services</Typography>
        <p>
          <strong>Dairy Farming:</strong> Our expert labor force is trained in modern dairy farming techniques, ensuring the highest standards of care and productivity. From milking to animal husbandry, our workers are dedicated to maintaining the health and well-being of livestock.
        </p>
        <br />
        <p>
          <strong>Agriculture:</strong> Agriculture is the backbone of any thriving society, and our team is committed to supporting farmers with skilled labor. We assist with planting, harvesting, irrigation, and all aspects of crop management to ensure abundant yields and sustainable practices.
        </p>
        <br />
        <p>
          <strong>Solar Panel Installation:</strong> Embrace renewable energy with our specialized solar panel installation services. Our technicians are equipped with the knowledge and tools to efficiently install solar panels, helping you harness the power of the sun to reduce energy costs and environmental impact.
        </p>
        <br />
        <p>
          <strong>Construction:</strong> Whether it's residential, commercial, or industrial construction, our workforce is experienced in all facets of the building process. From laying foundations to finishing touches, we provide the skilled labor necessary to bring your construction projects to life.
        </p>
        <br />
        <Typography variant="h5">Our Mission</Typography>
        <p>
          At ERESTA EVIDENTE, our mission is to provide exceptional labor services that exceed our clients' expectations. We believe in the value of hard work, dedication, and the importance of connecting the right people with the right jobs. Our commitment to quality and professionalism is the cornerstone of our business.
        </p>
        <br />
        <Typography variant="h5">Why Choose Us?</Typography>
        <p>
          <strong>Skilled Workforce:</strong> Our team comprises experienced and trained professionals ready to meet your labor needs.
        </p>
        <br />
        <p>
          <strong>Reliability:</strong> We understand the importance of timely and dependable service, ensuring your projects run smoothly.
        </p>
        <br />
        <p>
          <strong>Quality Assurance:</strong> We are dedicated to maintaining the highest standards in every job we undertake.
        </p>
        <br />
        <p>
          <strong>Local Expertise:</strong> Based in Portugal, we have a deep understanding of the local market and industry requirements.
        </p>
        <br />
        <Typography variant="h5">Get in Touch</Typography>
        <p>
          If you need labor for dairy farming, agriculture, solar panel installation, or construction, look no further than ERESTA EVIDENTE. Contact us today to learn more about our services and how we can assist you with your projects.
        </p>
      </Box>
    </Layout>
  );
};

export default About;