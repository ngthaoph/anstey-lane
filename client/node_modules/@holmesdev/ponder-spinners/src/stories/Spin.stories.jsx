import { Spin } from "../components/Spin/Spin.jsx";
import * as React from "react";

export default {
  title: "Spin",
  component: Spin,
};
const Template = (args) => <Spin {...args} />;

//copy function using bind
export const Default = Template.bind({});

// <CircularSpinner color="red" opacity="0.3"></CircularSpinner>

Default.args = {
  color1: "red", // Use the correct prop names
  color2: "blue", // Added for completeness
  opacity1: 0.3, // Use opacity1 instead of opacity
  opacity2: 1, // Added for completeness
  speed: "2s", // Optional speed prop
  direction: "-360deg", // Optional direction prop
  size: "100",
};
