export type InputType =
  | "default"
  | "username"
  | "email"
  | "password"
  | "phone"
  | "code"
  | "normal";

export type InputState = "default" | "active" | "filled" | "error" | "disabled";

export type InputSize = "default" | "code";

export interface InputFieldProps {
  type?: InputType;
  state?: InputState;
  size?: InputSize;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  maxLength?: number;

  // Input type specific props
  showPassword?: boolean; // for password type
  countryCode?: string; // for phone type
  mask?: string; // for phone type
  codeLength?: number; // for code type

  // Event handlers
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;

  // Styling
  className?: string;
  style?: React.CSSProperties;

  // Accessibility
  "aria-label"?: string;
  "aria-describedby"?: string;
  id?: string;
  name?: string;
}

export interface InputIconProps {
  type: "leading" | "trailing";
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface PhoneInputProps extends Omit<InputFieldProps, "type"> {
  countryCode?: string;
  onCountryChange?: (countryCode: string) => void;
  showCountrySelector?: boolean;
}

export interface CodeInputProps extends Omit<InputFieldProps, "type"> {
  length?: number;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
  allowPaste?: boolean;
}

export interface PasswordInputProps extends Omit<InputFieldProps, "type"> {
  showPassword?: boolean;
  onTogglePassword?: () => void;
}
