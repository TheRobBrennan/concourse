describe("The default Next.js page", () => {
  it("loads with an expected message", () => {
    cy.visit("/")
    cy.contains("Hello Next.js")
  })
})
