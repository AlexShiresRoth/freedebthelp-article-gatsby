import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  box-shadow: 0 0 0 5px #b4c4ae;
`;
const Inner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const Paragraph = styled.p`
  font-size: 14px;
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
