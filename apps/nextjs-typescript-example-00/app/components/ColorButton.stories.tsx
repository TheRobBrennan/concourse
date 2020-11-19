import React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import ColorButton from "./ColorButton"

storiesOf("ColorButton", module)
  .add("red", () => <ColorButton color="red" onClick={action("clicked")} />)
  .add("blue", () => <ColorButton color="blue" onClick={action("clicked")} />)
