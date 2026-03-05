class LoginPage
{

    constructor(page)
    {
        this.page=page
        this.username="#email"
        this.password="#password"
        this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
    }

    async LoginToApplication(polusername, polpassword)
    {
        await this.page.fill(this.username, polusername)
        await this.page.waitForTimeout(2000);

        await this.page.fill(this.password, polpassword)
        await this.page.waitForTimeout(2000);

        await this.page.click(this.loginbutton)
        await this.page.waitForTimeout(2000);

    }
}

module.exports=LoginPage;



// class LoginPage
// {

//     constructor(page)
//     {
//         this.page=page
//         this.username="#email"
//         this.password="#password"
//         this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
//     }

//     async FillUsername(polusername)
//     {
//         await this.page.fill(this.username, polusername)
//         await this.page.waitForTimeout(2000);

//     }

//       async FillPassword(polpassword)
//     {
//         await this.page.fill(this.password, polpassword)
//         await this.page.waitForTimeout(2000);

//     }

//        async ClickLoginButton()
//     {
//         await this.page.click(this.loginbutton)
//         await this.page.waitForTimeout(2000);

//     }
// }

// module.exports=LoginPage;