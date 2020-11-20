import React from "react"

import { action } from "@storybook/addon-actions"
import { select, text, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"

import ColorButton from "./ColorButton"

storiesOf("ColorButton", module)
  .addDecorator(withKnobs)
  .add("red", () => (
    <ColorButton
      color={select("color", { Red: "red", Dark: "darkred" }, "red")}
      onClick={action("clicked")}
    />
  ))
  .add("blue", () => (
    <ColorButton color={text("color", "blue")} onClick={action("clicked")} />
  ))
