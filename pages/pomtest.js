exports.Midhun=class Midhun{
    constructor(page){
        this.page = page

          this.logintext = '#login2'
          this.enterusername = '#loginusername'
          this.enterpassword =  '#loginpassword'
          this.clickbutton = 'button[onclick="logIn()"]'
    }

    async gotologinpage(){
        await this.page.goto('https://www.demoblaze.com/');
    }
    async Login(usename,password){
        await this.page.locator( this.logintext).click();
        await this.page.locator(this.enterusername).fill(usename);
        await this.page.locator(this.enterpassword).fill(password);
        await this.page.locator(this.clickbutton).click();

    }
 }