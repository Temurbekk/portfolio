import React from "react";
import SocialContact from "../components/Contact/";
import Layout from "../components/layout";
import contact from "../data/Contact";
import {
  ContactWrapper,
  ContactHeader,
  ContactDetails,
  ContactBox,
} from "../styles/ContactStyles";

const ContactPage = () => {
  return (
    <div>
      <Layout pageTitle="Contact Page">
        <ContactWrapper>
          <ContactHeader>Get in touch</ContactHeader>
          <ContactDetails>
            <ContactBox>
              {contact.map((item) => (
                <SocialContact key={item.id} info={item} />
              ))}
            </ContactBox>
          </ContactDetails>
        </ContactWrapper>
      </Layout>
    </div>
  );
};

export default ContactPage;
