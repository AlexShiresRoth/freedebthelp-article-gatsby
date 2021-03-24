import * as React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import Footer from "../components/Footer";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Inner = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const logo = {
  src:
    "https://res.cloudinary.com/fillthevoidio/image/upload/v1616434323/debthelp/logo-freedebthelp_bjrfrc.png",
};

// markup
const IndexPage = () => {
  return (
    <Main>
      <Inner>
        <Nav logo={logo} />
        <Content>
          <LeftColumn />
          <RightColumn />
        </Content>
        <Footer />
      </Inner>
    </Main>
  );
};

export default IndexPage;
