import React from "react"
import { shallow } from "enzyme"

import IndexPage from "../pages/index"

describe("The default page", () => {
  it(`should render`, () => {
    const subject = shallow(<IndexPage message={"Test message"} />)
    expect(subject).toBeDefined()
  })
})
