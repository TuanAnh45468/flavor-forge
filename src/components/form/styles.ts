"use client";
import styled, { css } from "styled-components";
import { InputState, InputType, InputSize } from "./types";

interface StyledInputWrapperProps {
  $state: InputState;
  $type: InputType;
  $size: InputSize;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
}

const getStateStyles = ($state: InputState) => {
  switch ($state) {
    case "active":
      return css`
        background-color: ${(props) =>
          props.theme.colors?.primary
            ? `${props.theme.colors.primary}08`
            : "rgba(245, 72, 74, 0.08)"};
        border-color: ${(props) => props.theme.colors?.primary || "#F5484A"};
      `;
    case "filled":
      return css`
        background-color: ${(props) =>
          props.theme.colors?.background === props.theme.colors?.others?.white
            ? props.theme.colors?.greyscale?.[50] || "#FAFAFA"
            : props.theme.colors?.dark?.[2] || "#1F222A"};
        border-color: ${(props) =>
          props.theme.colors?.background === props.theme.colors?.others?.white
            ? props.theme.colors?.greyscale?.[200] || "#EEEEEE"
            : props.theme.colors?.dark?.[4] || "#35383F"};
      `;
    case "error":
      return css`
        background-color: ${(props) =>
          props.theme.colors?.primary
            ? `${props.theme.colors.primary}08`
            : "rgba(245, 72, 74, 0.08)"};
        border-color: ${(props) => props.theme.colors?.primary || "#F5484A"};
      `;
    case "disabled":
      return css`
        opacity: 0.5;
        cursor: not-allowed;
        background-color: ${(props) =>
          props.theme.colors?.greyscale?.[100] || "#F5F5F5"};
      `;
    case "default":
    default:
      return css`
        background-color: ${(props) =>
          props.theme.colors?.background === props.theme.colors?.others?.white
            ? props.theme.colors?.greyscale?.[50] || "#FAFAFA"
            : props.theme.colors?.dark?.[2] || "#1F222A"};
        border-color: ${(props) =>
          props.theme.colors?.background === props.theme.colors?.others?.white
            ? props.theme.colors?.greyscale?.[200] || "#EEEEEE"
            : props.theme.colors?.dark?.[4] || "#35383F"};
      `;
  }
};

const getSizeStyles = ($size: InputSize) => {
  switch ($size) {
    case "code":
      return css`
        padding: 16px 32px;
        min-width: auto;
        width: auto;
        text-align: center;
      `;
    case "default":
    default:
      return css`
        padding: 18px 20px;
        width: 382px;
      `;
  }
};

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid;
  font-family: ${(props) =>
    props.theme.typography?.fontFamily?.primary || "Urbanist, sans-serif"};
  transition: all 0.2s ease;
  gap: 12px;

  ${(props) => getStateStyles(props.$state)}
  ${(props) => getSizeStyles(props.$size)}

  &:focus-within {
    background-color: ${(props) =>
      props.theme.colors?.primary
        ? `${props.theme.colors.primary}08`
        : "rgba(245, 72, 74, 0.08)"};
    border-color: ${(props) => props.theme.colors?.primary || "#F5484A"};
  }

  ${(props) =>
    props.$type === "code" &&
    css`
      justify-content: center;
      min-width: 80px;
    `}
`;

export const StyledInput = styled.input<{
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $state: InputState;
}>`
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 1.25%;
  color: ${(props) => props.theme.colors?.text || "#212121"};
  flex: 1;
  min-width: 0;

  font-weight: ${(props) =>
    props.$state === "filled" || props.$state === "active" ? 600 : 400};

  &::placeholder {
    color: ${(props) => props.theme.colors?.greyscale?.[500] || "#9E9E9E"};
    font-weight: 400;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.theme.colors?.background !== props.theme.colors?.others?.white &&
    css`
      color: ${(props) => props.theme.colors?.others?.white || "#FFFFFF"};
    `}
`;

export const InputIcon = styled.div<{
  $position: "leading" | "trailing";
  $clickable?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors?.text || "#212121"};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  svg {
    width: 20px;
    height: 20px;
  }

  ${(props) =>
    props.theme.colors?.background !== props.theme.colors?.others?.white &&
    css`
      color: ${(props) => props.theme.colors?.others?.white || "#FFFFFF"};
    `}
`;

export const CountrySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const CountryFlag = styled.div`
  width: 24px;
  height: 18px;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.colors?.greyscale?.[200] || "#EEEEEE"};
`;

export const CodeInputContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const CodeInputField = styled(StyledInput)`
  width: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
`;
