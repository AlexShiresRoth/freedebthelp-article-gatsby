import React from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
const FooterSection = styled.footer`
  width: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;
const Inner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const Paragraph = styled.p`
  font-size: 20px;
  color: #666;
  font-family: Montserrat;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <Paragraph>&copy; freedebthelp {new Date().getFullYear()}</Paragraph>
      </Inner>
    </FooterSection>
  );
};

export default Footer;