import Button, { type ButtonProps } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },

    size: {
      options: ["base", "sm", "lg"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },

    variant: {
      options: ["default", "secondary", "primary"],
      control: {
        type: "select",
      },
    },
  },

  parameters: {},

  // default
  args: {
    children: "Button",
    disabled: false,
    onClick: () => {},
    size: "base",
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = {};
