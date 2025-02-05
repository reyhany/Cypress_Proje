class BasePage {
    constructor() {
        // Base URL can be configured here if needed
    }

    // Common methods that can be used across all page objects
    visit(path) {
        cy.visit(path)
    }

    getElement(selector) {
        return cy.get(selector)
    }

    click(selector) {
        return this.getElement(selector).click()
    }

    type(selector, text) {
        return this.getElement(selector).type(text)
    }

    shouldBeVisible(selector) {
        return this.getElement(selector).should('be.visible')
    }

    shouldHaveText(selector, text) {
        return this.getElement(selector).should('have.text', text)
    }
}

export default BasePage
