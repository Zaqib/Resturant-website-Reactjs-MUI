import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner-solar.png";
import "../App.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, textAlign: 'center' }}>
        <div className="headerContainer">
          <h1 className="bg-white" style={{ color: "white" }}>ERESTA EVIDENTE</h1>
          <p className="bg-white" style={{ color: "Red", fontSize: "1.25rem", fontWeight: "bold" }}>We provide the best Labour Services in Portugal. If you need any service, please <Link to="/contact" className="contact-link">click here</Link> For more Details</p>
          <Link to="/contact">
            <button className="btn-contact">Contact Us</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
