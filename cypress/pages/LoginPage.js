import BasePage from './BasePage'

class LoginPage extends BasePage {
    constructor() {
        super()
        this.usernameInput = '#username'
        this.passwordInput = '#password'
        this.loginButton = '#login-button'
        this.errorMessage = '.error-message'
    }

    // Page specific methods
    visitLoginPage() {
        this.visit('/login')
    }

    login(username, password) {
        this.type(this.usernameInput, username)
        this.type(this.passwordInput, password)
        this.click(this.loginButton)
    }

    verifyErrorMessage(message) {
        this.shouldHaveText(this.errorMessage, message)
    }
}

export default LoginPage
