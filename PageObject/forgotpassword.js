class ForgotPassword
{

    constructor(page)
    {
        this.page=page
        this.forogotpassword=" //span[normalize-space()='Forget password?']"
        this.useremail="#forget-password-form_email"
        this.submit="//button[@type='submit']"
        // this.newpassword = "#reset-password-form_password"
        // this.confirmpassword = "#reset-password-form_confirmPassword"
        // this.resetbutton = "//button[@type='submit']"
    }

    async NavigateToForgotPassword(poluseremail)
    {
        await this.page.click(this.forogotpassword)
        await this.page.waitForTimeout(2000);
        
        await this.page.fill(this.useremail, poluseremail)
        await this.page.waitForTimeout(2000);

        await this.page.click(this.submit)
        await this.page.waitForTimeout(5000);
    }

//      async ResetPassword(polnewpassword, polconfirmpassword)
//     {
//         await this.page.fill(this.newpassword, polnewpassword)
//         await this.page.waitForTimeout(2000);
        
//         await this.page.fill(this.confirmpassword, polconfirmpassword)
//         await this.page.waitForTimeout(2000);

//         await this.page.click(this.resetbutton)
//         await this.page.waitForTimeout(2000);

//     }
}

module.exports=ForgotPassword;