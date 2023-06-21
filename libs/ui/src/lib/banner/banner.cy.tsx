import Banner from './banner'

describe(Banner.name, () => {
  it('renders', () => {
    cy.mount(<Banner text="Yikes" />)
    cy.get('h1').contains(/yikes/i)
    cy.matchImage()
  })
})
