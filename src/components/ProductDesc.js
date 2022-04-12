import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import illustrationDesc from "../assets/headerimg.png";

const ProductDesc = () => {
  return (
    <StyledProductDesc>
      <div className="build-wealth__img-container">
        <img
          src={illustrationDesc}
          alt="Build-wealth"
          className="build-wealth__img"
        />
      </div >
      <div className="build-wealth__text-container">
        <h2 className="build-wealth__heading">What is This is me ?</h2>
        <p className="build-wealth__title">From coaching to affirmation, we're with you all the way </p>
        <p className="build-wealth__body-text">
        This is me helps you understand yourself and gives you the tools, information and support to achieve your potential and reach greatness.
        </p>
        <p className="build-wealth__body-text">
        As the world is filled with uncertainty and life as a whole is unstructured. This is me, ensures you make progress to live a healthy, fit and happy life.
        </p>
        <CustomButton buttonText="Get Started" fontWeight="700" />
      </div>
    </StyledProductDesc>
  );
};

export default ProductDesc;

const StyledProductDesc = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 6rem;
  align-items: center;
  padding-top: 8rem;
  color: var(--clr-darkGray);

  .build-wealth {
    &__img-container {
      margin: 0 auto;
    }
    &__img {
      width: 31.6rem;
      /* height: 31.6rem; */
    }
    &__text-container {
        max-width: 42rem;
    }
    &__heading {
      font-size: 4rem;
      line-height: 100%;
      color: var(--clr-indigoBody);
      font-weight: 800;
    }
    &__title {
      font-size: 2rem;
      line-height: 150%;
      /* font-weight: 500; */
      /* max-width: 36rem; */
      padding: 1.6rem 0;
    }
    &__body-text {
      font-size: 1.6rem;
      line-height: 150%;
      padding: 0 0 2.4rem;
      font-weight: 300;
      color: var(--clr-black);
      /* max-width: 36rem; */
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
