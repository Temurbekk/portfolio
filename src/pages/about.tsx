import React from "react";
import AboutBox from "../components/About";
import about from "../data/About";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  UserTopic,
} from "../styles/AboutStyles";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <UserWrapper>
        <UserTitle>
          <span>Temur</span> Sabirov
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hello there, welcome to my portfolio. I am a Software Engineer
              based in NYC, specializing in Frontend and iOS development.
            </p>
            <p>
              I have a huge passion for technology. I learn and grow everyday.
            </p>
          </div>
          <StaticImage alt="Temur posing" src="../images/portrait.jpeg" />
        </UserDescription>
        <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic>
      </UserWrapper>
    </Layout>
  );
};

export default AboutPage;
