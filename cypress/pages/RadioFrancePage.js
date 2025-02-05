import BasePage from './BasePage'

class RadioFrancePage extends BasePage {
    constructor() {
        super()
        this.url = 'https://www.radiofrance.fr/'
        this.mainLogo = '[data-testid="rf-logo"]'  // Updated selector
        this.cookieAcceptButton = '#didomi-notice-agree-button'
    }

    visit() {
        super.visit(this.url)
    }

    acceptCookies() {
        // Handle cookie consent if present
        cy.get('body').then($body => {
            if ($body.find(this.cookieAcceptButton).length > 0) {
                this.click(this.cookieAcceptButton)
            }
        })
    }

    verifyPageLoaded() {
        // Wait for the page to load
        cy.wait(5000) // Add a wait for page load
        // Check if the page has loaded by verifying multiple elements
        cy.get('body').should('be.visible')
        cy.url().should('include', 'radiofrance.fr')
    }
}

export default RadioFrancePage
