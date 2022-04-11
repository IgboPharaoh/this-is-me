import React from "react";
import styled from "styled-components";
import phone from "../assets/headerimg.png";
import CustomButton from "./CustomButton";
import appleLogo from "../assets/apple-logo.svg";
import googleLogo from "../assets/google-logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-section__left">
        <div className="header-section__left-container">
          <h1 className="header-section__big-text">
            Your lifestyle, our <span className="priority">Priority</span>
          </h1>
          <p className="header-section__small-text">
            Simplify the process to help you set your goals and desires. Get
            appropriate guidiance and coaching to live a fit, healthy, and happy
            lifestyle.
          </p>
          <CustomButton
            buttonText="Download on the"
            spanText="App Store"
            fontSize="1.3"
            icon={appleLogo}
            paddingTopAndBottom="0.8"
            paddingRightAndLeft="1.6"
            buttonTextClassName="buttonTextClassName"
            className="className-btnA"
            backgroundColor="var(--clr-black)"
            borderRadius="1"
          />
          <CustomButton
            buttonText="Download on the"
            spanText="Google Play"
            fontSize="1.3"
            icon={googleLogo}
            paddingTopAndBottom="0.8"
            paddingRightAndLeft="1.6"
            buttonTextClassName="buttonTextClassName"
            className="className-btnB"
            backgroundColor="var(--clr-black)"
            borderRadius="1"
          />
        </div>
      </div>

      <div className="header-section__right">
        <img src={phone} alt="phone-snapshot" className="header-section__img" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 100%;

  .header-section {
    &__left-container {
      width: 45rem;
    }
    &__big-text {
      font-size: 5.6rem;
      font-weight: 800;
      line-height: 6.5rem;
      color: var(--clr-indigoBody);
    }
    &__small-text {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: var(--clr-darkGray);
      padding: 2.4rem 0rem 3.2rem;
      padding-right: 3.5rem;
    }
    &__right{
            margin-right: 4rem;
        }        
    &__img {
      height: 50rem;
    }
  }
  .buttonTextClassName {
    padding-left: 0.8rem;
  }
  .className-btnA {
    margin-right: 1.6rem;
  }
  @media (max-width: 768px) {
    .header-section {
      &__big-text {
        font-size: 4rem;
        line-height: 5rem;
      }
      &__small-text {
        padding: 2.4rem 0;
      }
      &__right{
            margin-right: 0rem;
        }
        &__img {
      height: 46rem;
    } 
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    height: auto;
    padding-top: 3.6rem;

    .header-section {
      &__left-container {
        width: 100%;
      }
      &__big-text {
        font-size: 3.6rem;
        line-height: 5rem;
      }
      &__small-text {
        font-size: 1.4rem;
        width: auto;
      }
      &__img {
        padding-top: 4.8rem;
      }
    }
  }
`;
export default Header;
