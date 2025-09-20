import type { Meta, StoryObj } from "@storybook/react";
import { InputField, CodeInput } from "./index";
import { InputType, InputState } from "./types";

const meta: Meta<typeof InputField> = {
  title: "Components/Input/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive input field component with multiple types, states, and theme support based on the Figma design system.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "default",
        "username",
        "email",
        "password",
        "phone",
        "normal",
      ] as InputType[],
      description: "The type of input field",
    },
    state: {
      control: { type: "select" },
      options: [
        "default",
        "active",
        "filled",
        "error",
        "disabled",
      ] as InputState[],
      description: "The visual state of the input",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value of the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    error: {
      control: { type: "boolean" },
      description: "Whether the input has an error state",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Input Stories
export const Default: Story = {
  args: {
    type: "default",
    placeholder: "Placeholder",
  },
};

export const DefaultActive: Story = {
  args: {
    type: "default",
    state: "active",
    placeholder: "Placeholder",
  },
};

export const DefaultFilled: Story = {
  args: {
    type: "default",
    state: "filled",
    value: "Lorem Ipsum",
  },
};

// Username Input Stories
export const Username: Story = {
  args: {
    type: "username",
  },
};

export const UsernameActive: Story = {
  args: {
    type: "username",
    state: "active",
    value: "John Doe",
  },
};

export const UsernameFilled: Story = {
  args: {
    type: "username",
    state: "filled",
    value: "John Doe",
  },
};

// Email Input Stories
export const Email: Story = {
  args: {
    type: "email",
  },
};

export const EmailActive: Story = {
  args: {
    type: "email",
    state: "active",
    value: "john.doe@domain.com",
  },
};

export const EmailFilled: Story = {
  args: {
    type: "email",
    state: "filled",
    value: "john.doe@domain.com",
  },
};

// Password Input Stories
export const Password: Story = {
  args: {
    type: "password",
  },
};

export const PasswordActive: Story = {
  args: {
    type: "password",
    state: "active",
    value: "password123",
  },
};

export const PasswordFilled: Story = {
  args: {
    type: "password",
    state: "filled",
    value: "password123",
  },
};

// Phone Input Stories
export const Phone: Story = {
  args: {
    type: "phone",
  },
};

export const PhoneActive: Story = {
  args: {
    type: "phone",
    state: "active",
    value: "+1 111 467 378 399",
  },
};

export const PhoneFilled: Story = {
  args: {
    type: "phone",
    state: "filled",
    value: "+1 111 467 378 399",
  },
};

// Normal/Dropdown Input Stories
export const Normal: Story = {
  args: {
    type: "normal",
    placeholder: "Select option",
  },
};

export const NormalActive: Story = {
  args: {
    type: "normal",
    state: "active",
    value: "Selected Option",
  },
};

export const NormalFilled: Story = {
  args: {
    type: "normal",
    state: "filled",
    value: "Selected Option",
  },
};

// Error States
export const WithError: Story = {
  args: {
    type: "email",
    error: true,
    value: "invalid-email",
  },
};

// Disabled States
export const Disabled: Story = {
  args: {
    type: "default",
    disabled: true,
    placeholder: "Disabled input",
  },
};

// Interactive Examples
export const Interactive: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "20px",
      }}
    >
      <h3>All Input Types</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "16px",
        }}
      >
        <InputField type="default" placeholder="Default Input" />
        <InputField type="username" />
        <InputField type="email" />
        <InputField type="password" />
        <InputField type="phone" />
        <InputField type="normal" placeholder="Select option" />
      </div>

      <h3>States</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "16px",
        }}
      >
        <InputField type="default" placeholder="Default State" />
        <InputField type="default" state="active" placeholder="Active State" />
        <InputField type="default" state="filled" value="Filled State" />
        <InputField type="default" error placeholder="Error State" />
        <InputField type="default" disabled placeholder="Disabled State" />
      </div>
    </div>
  ),
};

// Code Input Stories
const codeInputMeta: Meta<typeof CodeInput> = {
  title: "Components/Input/CodeInput",
  component: CodeInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A specialized input component for OTP/verification codes with individual digit inputs.",
      },
    },
  },
  argTypes: {
    length: {
      control: { type: "number", min: 3, max: 8 },
      description: "Number of code digits",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value of the code input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the code input is disabled",
    },
    error: {
      control: { type: "boolean" },
      description: "Whether the code input has an error state",
    },
  },
  tags: ["autodocs"],
};

export const CodeInputStories = {
  ...codeInputMeta,
};

export const CodeDefault: StoryObj<typeof CodeInput> = {
  render: () => <CodeInput length={6} />,
  parameters: {
    docs: {
      description: {
        story: "Default 6-digit code input for verification.",
      },
    },
  },
};

export const CodeFilled: StoryObj<typeof CodeInput> = {
  render: () => <CodeInput length={6} value="123456" />,
  parameters: {
    docs: {
      description: {
        story: "Code input with filled value.",
      },
    },
  },
};

export const CodeError: StoryObj<typeof CodeInput> = {
  render: () => <CodeInput length={6} value="12345" error />,
  parameters: {
    docs: {
      description: {
        story: "Code input in error state.",
      },
    },
  },
};

export const CodeDisabled: StoryObj<typeof CodeInput> = {
  render: () => <CodeInput length={6} disabled />,
  parameters: {
    docs: {
      description: {
        story: "Disabled code input.",
      },
    },
  },
};

export const CodeCustomLength: StoryObj<typeof CodeInput> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4>4-digit Code</h4>
        <CodeInput length={4} />
      </div>
      <div>
        <h4>6-digit Code</h4>
        <CodeInput length={6} />
      </div>
      <div>
        <h4>8-digit Code</h4>
        <CodeInput length={8} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Code inputs with different lengths.",
      },
    },
  },
};
