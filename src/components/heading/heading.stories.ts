import Heading, { type HeadingProps } from "./heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<HeadingProps> = {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },

    label: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select",
      },
    },

    align: {
      options: ["left", "center", "right"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "base", "lg", "xl", "2xl", "3xl", "4xl"],
      control: {
        type: "select",
      },
    },
  },

  parameters: {},

  // default
  args: { label: "h1", align: "left", children: "Hello Chat", size: "base" },
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const Playground: Story = {};
