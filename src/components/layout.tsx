import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import favicon from "../assets/images/rash-favicon.png";
import "./layout.css";
import Navbar from "./Navbar/";
import Footer from "./Footer/";
import SEO from "./seo";
import { Location } from "@reach/router";

const Wrapper = styled.div`
  background-color: #060144;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 5% 8%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`;

const Layout = ({ children, pageTitle }) => (
  <>
    <SEO title={pageTitle} />
    <Location>
      {({ location }) => {
        return (
          <Wrapper className={location.pathname === "/" ? "cutBackground" : ""}>
            <Navbar />
            {children}
            <Footer
              footerClass={
                location.pathname === "/" ? "footerInitial" : "footerAbsolute"
              }
            />
          </Wrapper>
        );
      }}
    </Location>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
