import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
const Column = styled.div`
  margin: 0.3rem 0;
  @media screen and (max-width: 900px) {
    margin: 0.2rem 0;
  }
`;
const HeadLine = styled.h1`
  font-family: Raleway;
  font-weight: 800;
  line-height: 1.3;
  font-size: 2em;
  color: #111;
  margin: 0.6rem 0;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
const SubHeadLine = styled.h4`
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1;
  font-size: 0.8em;
  color: #999;
  margin: 0.2rem 0;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;
const IconRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`;
const Avatar = styled.img`
  border-radius: 50%;
  max-width: 2rem;
  vertical-align: middle;
`;

const Text = styled.p`
  color: #666;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 1.3;
  @media screen and (max-width: 900px) {
    font-size: 18px;
    margin: 0.2rem 0;
    line-height: 1.5;
  }
`;
const ImageContainer = styled.div`
  max-width: 100%;
  margin: 0.5rem 0;
`;
const Image = styled.img`
  object-fit: containt;
  max-width: 100%;
`;
const Icons = {
  marginRight: ".5rem",
  color: "#586994",
};
const Button = styled.button`
  padding: 1.5rem 1rem;
  margin: 1rem 0;
  background: #586994;
  color: #fff;
  font-family: Montserrat;
  border-radius: 5px;
  border: 0;
  font-weight: 800;
  font-size: 16px;
  box-shadow: 0 1px 30px #eee;
`;

const LeftColumn = () => {
  const [avatar, setAvatar] = useState("");

  const fetchAnAvatar = async () => {
    const res = await fetch("https://randomuser.me/api/?gender=male", {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => err);
    return setAvatar(res);
  };

  useEffect(() => {
    fetchAnAvatar();
  }, []);

  console.log("dis an avatar yo", avatar);

  if (!avatar) {
    return (
      <Section>
        <HeadLine>Loading...</HeadLine>
      </Section>
    );
  }

  return (
    <Section>
      <InnerSection>
        <Column>
          <HeadLine>
            Breaking: We’ve Discovered a Loophole Left Behind from Ronald
            Reagan’s Presidency That Can Significantly Eliminate Any Debt You
            Might Owe.
          </HeadLine>
          <SubHeadLine>Published: March 22, 2021</SubHeadLine>
          <SubHeadLine>
            By: Dave Kurtz <Avatar src={avatar.results[0].picture.thumbnail} />
          </SubHeadLine>
          <IconRow>
            <FontAwesomeIcon icon={faFacebook} style={{ ...Icons }} />
            <FontAwesomeIcon icon={faInstagram} style={{ ...Icons }} />
            <FontAwesomeIcon icon={faTwitter} style={{ ...Icons }} />
            <FontAwesomeIcon icon={faGoogle} style={{ ...Icons }} />
          </IconRow>
        </Column>
        <Column>
          <ImageContainer>
            <Image
              src={`https://res.cloudinary.com/fillthevoidio/image/upload/v1616531614/debthelp/ewdgfarsgfsfr_gklg76.jpg`}
            />
          </ImageContainer>
        </Column>
        <Column>
          <Text>
            <strong>Bethesda, MD March 22, 2021</strong> – While millions of
            Americans suffer the liberal administration seems more occupied with
            giving illegals and ”dreamers” more than patriots. They have even
            been discussing eliminating student loans for those same illegals.
          </Text>
        </Column>
        <Column>
          <ImageContainer>
            <Image
              src={`https://res.cloudinary.com/fillthevoidio/image/upload/v1616531933/debthelp/dsadfsfsdf_wieflf.jpg`}
            />
          </ImageContainer>
        </Column>
        <Column>
          <Text>
            This made us mad so we poured over thousands of bills, and records
            and basically anything we could get our hands on and we discovered
            back in the early 80’s some loopholes that President Reagan created
            when he deregulated banks that can allow for patriots like you to
            eliminate those debts through a lawyer trained in these “left
            behind” laws.
          </Text>
        </Column>
        <Column>
          <ImageContainer>
            <Image
              src={`https://res.cloudinary.com/fillthevoidio/image/upload/v1616532048/debthelp/sfdfsfsd_pr43c0.jpg`}
            />
          </ImageContainer>
        </Column>
        <Column>
          <Text>
            We discovered that finding a reputable one was tough work and while
            we did reach out to a lot of companies it was those who were part of
            the Free DebtHelpPlan.com referral network that were the most
            knowledgeable and fought for fellow patriots like you and I.
          </Text>
        </Column>
        <Column>
          <Text>
            They offer a completely free consultation, that will show you
            exactly how much you can save and how much faster they can get rid
            of that debt than anyone else.
          </Text>
        </Column>
        <Column>
          <Button
            onPointerDown={() =>
              (window.location.href = "https://freedebthelpplan.com/index.php")
            }
          >
            Click here and get your free debt help plan.
          </Button>
        </Column>
      </InnerSection>
    </Section>
  );
};

export default LeftColumn;
