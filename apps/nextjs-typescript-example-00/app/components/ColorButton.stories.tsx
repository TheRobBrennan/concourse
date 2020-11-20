import React from "react"

import { action } from "@storybook/addon-actions"
import { select, text, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"

import ColorButton from "./ColorButton"

storiesOf("ColorButton", module)
  .addDecorator(withKnobs)
  .add("Pre-defined colors", () => (
    <ColorButton
      color={select("color", { Bright: "red", Dark: "darkred" }, "red")}
      onClick={action("clicked")}
    />
  ))
  .add("Freeform text color", () => (
    <ColorButton color={text("color", "blue")} onClick={action("clicked")} />
  ))
