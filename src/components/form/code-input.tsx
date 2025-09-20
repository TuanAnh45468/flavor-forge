"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  CodeInputContainer,
  StyledInputWrapper,
  CodeInputField,
} from "./styles";
import { CodeInputProps } from "./types";

const CodeInput: React.FC<CodeInputProps> = ({
  length = 6,
  value: controlledValue,
  defaultValue = "",
  onComplete,
  onChange,
  onFocus,
  onBlur,
  autoFocus = true,
  allowPaste = true,
  disabled = false,
  error = false,
  className,
  style,
  ...props
}) => {
  const [values, setValues] = useState<string[]>(() => {
    const initialValue = controlledValue || defaultValue;
    return Array.from({ length }, (_, i) => initialValue[i] || "");
  });

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Update values when controlled value changes
  useEffect(() => {
    if (controlledValue !== undefined) {
      const newValues = Array.from(
        { length },
        (_, i) => controlledValue[i] || "",
      );
      setValues(newValues);
    }
  }, [controlledValue, length]);

  // Auto-focus first input on mount
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const getState = (index: number) => {
    if (disabled) return "disabled";
    if (error) return "error";
    if (activeIndex === index) return "active";
    if (values[index]) return "filled";
    return "default";
  };

  const handleInputChange = useCallback(
    (index: number, inputValue: string) => {
      // Only allow single digit/character
      const newValue = inputValue.slice(-1);

      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);

      // Call onChange with complete value
      const completeValue = newValues.join("");
      onChange?.(completeValue);

      // Check if complete
      if (completeValue.length === length && !completeValue.includes("")) {
        onComplete?.(completeValue);
      }

      // Move to next input if value entered
      if (newValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [values, onChange, onComplete, length],
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      // Handle backspace
      if (e.key === "Backspace" && !values[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      // Handle arrow keys
      if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Handle paste
      if (e.key === "v" && (e.ctrlKey || e.metaKey) && allowPaste) {
        e.preventDefault();
        navigator.clipboard.readText().then((text) => {
          const digits = text.replace(/\D/g, "").slice(0, length);
          const newValues = Array.from({ length }, (_, i) => digits[i] || "");
          setValues(newValues);
          onChange?.(digits);

          if (digits.length === length) {
            onComplete?.(digits);
          }
        });
      }
    },
    [values, length, allowPaste, onChange, onComplete],
  );

  const handleFocus = useCallback(
    (index: number) => {
      setActiveIndex(index);
      onFocus?.();
    },
    [onFocus],
  );

  const handleBlur = useCallback(() => {
    setActiveIndex(-1);
    onBlur?.();
  }, [onBlur]);

  return (
    <CodeInputContainer className={className} style={style}>
      {Array.from({ length }, (_, index) => (
        <StyledInputWrapper
          key={index}
          $state={getState(index)}
          $type="code"
          $size="code"
          $hasLeadingIcon={false}
          $hasTrailingIcon={false}
        >
          <CodeInputField
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={values[index]}
            disabled={disabled}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            $hasLeadingIcon={false}
            $hasTrailingIcon={false}
            $state={getState(index)}
            id={props.id ? `${props.id}-${index}` : undefined}
            name={props.name ? `${props.name}-${index}` : undefined}
            aria-label={
              props["aria-label"]
                ? `${props["aria-label"]} digit ${index + 1}`
                : undefined
            }
          />
        </StyledInputWrapper>
      ))}
    </CodeInputContainer>
  );
};

export default CodeInput;
