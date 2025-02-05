import RadioFrancePage from '../pages/RadioFrancePage'

describe('Radio France Website Tests', { tags: ['@smoke', '@regression'] }, () => {
    const radioFrancePage = new RadioFrancePage()

    beforeEach(() => {
        // Visit Radio France website before each test
        cy.allure().epic('Radio France Website')
        cy.allure().feature('Homepage')
        radioFrancePage.visit()
    })

    it('should successfully load Radio France website', { tags: '@smoke' }, () => {
        cy.allure().story('Homepage Loading')
        cy.allure().severity('critical')
        
        // Accept cookies if present
        radioFrancePage.acceptCookies()
        
        // Verify the page is loaded by checking for the logo
        radioFrancePage.verifyPageLoaded()
        
        // Take a screenshot for the report
        cy.screenshot('homepage-loaded')
        
        // Verify we are on the correct URL
        cy.url().should('eq', 'https://www.radiofrance.fr/')
    })
})
