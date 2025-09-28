import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["default", "rounded"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    children: "With Left Icon",
    leftIcon: <span>📋</span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "secondary",
    children: "With Right Icon",
    rightIcon: <span>➡️</span>,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "outline",
    children: "Both Icons",
    leftIcon: <span>⚙️</span>,
    rightIcon: <span>✓</span>,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    variant: "primary",
    shape: "rounded",
    children: "Rounded Button",
  },
};

export const SecondaryRounded: Story = {
  args: {
    variant: "secondary",
    shape: "rounded",
    children: "Secondary Rounded",
  },
};

export const OutlineButton: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const GhostButton: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};
