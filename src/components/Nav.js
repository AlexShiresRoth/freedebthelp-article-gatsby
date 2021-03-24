import React from "react";
import styled from "styled-components";
import "@fontsource/montserrat";

const NavComponent = styled.nav`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 30px #eee;
`;

const NavInner = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.3rem 0;
`;

const NavBottomBar = styled.div`
  width: 100%;
  background: #586994;
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBottomInner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
  align-items: center;
`;

const Paragraph = styled.p`
  color: #fff;
  font-family: Montserrat;
  margin: 0.2rem 0;
`;

const Logo = styled.img`
  max-width: 6rem;
`;

const Link = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  font-family: Montserrat;
`;
const Nav = ({ logo }) => {
  return (
    <NavComponent>
      <NavInner>
        <Logo src={logo.src} />
      </NavInner>
      <NavBottomBar>
        <NavBottomInner>
          <Paragraph>Free Debt Help | Advertorial</Paragraph>
          <Link href="https://freedebthelpplan.com/index.php">Get Help</Link>
        </NavBottomInner>
      </NavBottomBar>
    </NavComponent>
  );
};

export default Nav;
