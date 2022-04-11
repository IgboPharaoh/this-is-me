import React from "react";
import styled from "styled-components";

const CustomButton = ({
  icon,
  imgClassname,
  buttonText,
  textColor,
  backgroundColor,
  borderRadius,
  paddingTopAndBottom,
  paddingRightAndLeft,
  fontSize,
  className,
  type,
  onClick,
  minPaddingTopAndBottom,
  minPaddingRightAndLeft,
  spanText,
  fontWeight,
  buttonTextClassName,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
}) => {
  return (
    <StyledButton
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      paddingTopAndBottom={paddingTopAndBottom}
      paddingRightAndLeft={paddingRightAndLeft}
      fontSize={fontSize}
      className={className || ""}
      onClick={onClick}
      type={type}
      minPaddingTopAndBottom={minPaddingTopAndBottom}
      minPaddingRightAndLeft={minPaddingRightAndLeft}
      fontWeight={fontWeight}
      hoverTextColor={hoverTextColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorderColor={hoverBorderColor}
    >
      <div className="text-container">
        <img src={icon} alt="" className={imgClassname} />
        <p className={buttonTextClassName}>
          {buttonText || "Hello world"}{" "}
          <span className="span-text">{spanText}</span>
        </p>
      </div>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'poppins';

  .text-container {
    display: flex;
    justify-content: space-between;
  }

  .span-text {
    font-size: 1.3rem;
    font-weight: 700;
    display: block;
  }

  color: ${({ textColor }) => textColor || "var(--white)"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--tealPrimary)"};
  color: ${({ textColor }) => textColor || "white"};
  text-align: left;
  padding-top: ${({ paddingTopAndBottom }) => paddingTopAndBottom || 1.2}rem;
  padding-bottom: ${({ paddingTopAndBottom }) => paddingTopAndBottom || 1.2}rem;
  padding-right: ${({ paddingRightAndLeft }) => paddingRightAndLeft || 3.2}rem;
  padding-left: ${({ paddingRightAndLeft }) => paddingRightAndLeft || 3.2}rem;
  border: none;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize || 1.4}rem;
  border-radius: ${({ borderRadius }) => borderRadius || 0.5}rem;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    color: ${({ hoverTextColor }) => hoverTextColor};
    border: ${({ hoverBorderColor }) => hoverBorderColor};

    svg {
      fill: var(--tealPrimary);
    }
  }

  @media only screen and (max-width: 445px) {
    padding-top: ${({ minPaddingTopAndBottom }) =>
      minPaddingTopAndBottom || 1}rem;
    padding-bottom: ${({ minPaddingTopAndBottom }) =>
      minPaddingTopAndBottom || 1}rem;
    padding-right: ${({ minPaddingRightAndLeft }) =>
      minPaddingRightAndLeft || 1.6}rem;
    padding-left: ${({ minPaddingRightAndLeft }) =>
      minPaddingRightAndLeft || 1.6}rem;
    font-size: 1rem;
  }
  @media only screen and (max-width: 400px) {
    padding-top: ${({ minPaddingTopAndBottom }) =>
      minPaddingTopAndBottom || 0.6}rem;
    padding-bottom: ${({ minPaddingTopAndBottom }) =>
      minPaddingTopAndBottom || 0.6}rem;
    padding-right: ${({ minPaddingRightAndLeft }) =>
      minPaddingRightAndLeft || 0.8}rem;
    padding-left: ${({ minPaddingRightAndLeft }) =>
      minPaddingRightAndLeft || 0.8}rem;
    font-size: 1rem;
  }
`;
export default CustomButton;
