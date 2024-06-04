import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  // Function to get domain name from URL
  const getDomainFromURL = (url) => {
    // Extract domain from URL using regex
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/im;
    const domain = url.match(domainRegex);
    // Check if domain is found
    if (domain && domain.length >= 2) {
      return domain[1];
    } else {
      return ""; // Return empty string if domain cannot be extracted
    }
  };

  // Function to get icon based on domain name
  const getIconForDomain = (domain) => {
    // Convert domain to lowercase for case-insensitive comparison
    const lowercasedDomain = domain.toLowerCase();

    // Check if domain contains common keywords
    if (lowercasedDomain.includes("example")) {
      return <SupportAgentIcon sx={{ color: "red", pt: 1 }} />;
    } else if (lowercasedDomain.includes("gmail")) {
      return <MailIcon sx={{ color: "skyblue", pt: 1 }} />;
    } else {
      return <CallIcon sx={{ color: "green", pt: 1 }} />;
    }
  };

  // Sample data with URLs
  const contactDetails = [
    { url: "https://www.erestaevidente.com" },
    { url: "mailto: info@erestaevidente.com" },
    { url: "tel: +351912428487" },
  ];

  return (
    <Layout>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ my: 5, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Company Contact</Typography>
          <p>
            This is an international company working in Portugal. We provide different types of services related to solar panel installation and provide labor to local people.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            margin: "0 auto", // Center horizontally
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {getIconForDomain(getDomainFromURL(detail.url))}{" "}
                      <a
                        href={detail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {detail.url}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
