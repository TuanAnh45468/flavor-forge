"use client";
import React, { useState, useCallback, forwardRef } from "react";
import {
  StyledInputWrapper,
  StyledInput,
  InputIcon,
  CountrySelector,
  CountryFlag,
} from "./styles";
import {
  ProfileIcon,
  MessageIcon,
  LockIcon,
  HideIcon,
  ShowIcon,
  ArrowDownIcon,
} from "./icons";
import { InputFieldProps } from "./types";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type = "default",
      state: controlledState,
      size = "default",
      placeholder = "Placeholder",
      value,
      defaultValue,
      disabled = false,
      error = false,
      required = false,
      autoFocus = false,
      maxLength,
      showPassword: controlledShowPassword,
      countryCode,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      className,
      style,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      id,
      name,
      ...props
    },
    ref,
  ) => {
    // Internal state management
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(
      controlledShowPassword || false,
    );

    // Determine current value and state
    const currentValue = value !== undefined ? value : internalValue;
    const isEmpty = !currentValue || currentValue.length === 0;

    // Auto-determine state if not controlled
    const currentState =
      controlledState ||
      (() => {
        if (disabled) return "disabled";
        if (error) return "error";
        if (isFocused) return "active";
        if (!isEmpty) return "filled";
        return "default";
      })();

    // Event handlers
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      },
      [value, onChange],
    );

    const handleFocus = useCallback(() => {
      setIsFocused(true);
      onFocus?.();
    }, [onFocus]);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
      onBlur?.();
    }, [onBlur]);

    const handlePasswordToggle = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    // Get input type
    const getInputType = () => {
      if (type === "password") {
        return showPassword ? "text" : "password";
      }
      if (type === "email") return "email";
      if (type === "phone") return "tel";
      return "text";
    };

    // Get leading icon
    const getLeadingIcon = () => {
      switch (type) {
        case "username":
        case "normal":
          return <ProfileIcon />;
        case "email":
          return <MessageIcon />;
        case "password":
          return <LockIcon />;
        case "phone":
          return (
            <CountrySelector>
              <CountryFlag>🇺🇸</CountryFlag>
              <ArrowDownIcon />
            </CountrySelector>
          );
        default:
          return null;
      }
    };

    // Get trailing icon
    const getTrailingIcon = () => {
      switch (type) {
        case "password":
          return (
            <InputIcon
              $position="trailing"
              $clickable
              onClick={handlePasswordToggle}
            >
              {showPassword ? <ShowIcon /> : <HideIcon />}
            </InputIcon>
          );
        case "normal":
          return (
            <InputIcon $position="trailing">
              <ArrowDownIcon />
            </InputIcon>
          );
        default:
          return null;
      }
    };

    // Get placeholder text
    const getPlaceholder = () => {
      switch (type) {
        case "username":
          return "Username";
        case "email":
          return "Email";
        case "password":
          return "Password";
        case "phone":
          return "+1 000 000 000";
        case "code":
          return "";
        default:
          return placeholder;
      }
    };

    const leadingIcon = getLeadingIcon();
    const trailingIcon = getTrailingIcon();
    const hasLeadingIcon = Boolean(leadingIcon);
    const hasTrailingIcon = Boolean(trailingIcon);

    return (
      <StyledInputWrapper
        $state={currentState}
        $type={type}
        $size={size}
        $hasLeadingIcon={hasLeadingIcon}
        $hasTrailingIcon={hasTrailingIcon}
        className={className}
        style={style}
      >
        {hasLeadingIcon && (
          <InputIcon $position="leading">{leadingIcon}</InputIcon>
        )}

        <StyledInput
          ref={ref}
          type={getInputType()}
          value={currentValue}
          placeholder={getPlaceholder()}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          $hasLeadingIcon={hasLeadingIcon}
          $hasTrailingIcon={hasTrailingIcon}
          $state={currentState}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          id={id}
          name={name}
          {...props}
        />

        {trailingIcon}
      </StyledInputWrapper>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
