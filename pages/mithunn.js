exports.Mithunn = class Mithunn {
    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = 'button[onclick="logIn()"]';
        this.userNameLabel = '#nameofuser';
        this.homeLink = 'a.navbar-brand';
        this.cartLink = '#cartur';
        this.categories = 'a.list-group-item';
        this.productTitles = '.card-title a';
        this.addToCartButton = 'a.btn.btn-success';
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async openLoginModal() {
        await this.page.click(this.loginLink);
        await this.page.waitForSelector(this.usernameInput);
    }

    async login(username, password) {
        await this.openLoginModal();
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await Promise.all([
            this.page.click(this.loginButton),
            this.page.waitForSelector('#logInModal', { state: 'hidden' })
        ]);
        await this.page.waitForFunction(
            ([selector, user]) => {
                const el = document.querySelector(selector);
                return el && el.innerText.includes(user);
            },
            [this.userNameLabel, username]
        );
    }

    async openCategory(name) {
        const category = this.page.locator(this.categories).filter({ hasText: name });
        await category.click();
        await this.page.waitForSelector(this.productTitles);
    }

    async selectProduct(name) {
        const product = this.page.locator(this.productTitles).filter({ hasText: name }).first();
        await product.click();
        await this.page.waitForURL(/prod\.html\?idp_=/);
        await this.page.waitForSelector(this.addToCartButton, { state: 'visible' });
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }

    async clickHome() {
        await this.page.click(this.homeLink);
        await this.page.waitForSelector(this.productTitles);
    }

    async clickCart() {
        await this.page.click(this.cartLink);
        await this.page.waitForURL('**/cart.html');
    }
};
