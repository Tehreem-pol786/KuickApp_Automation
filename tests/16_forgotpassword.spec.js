const { test, expect } = require ('@playwright/test');
const ForgotPassword=require("../PageObject/forgotpassword")
// const EmailHelper = require("../Utils/EmailHelper");


test('Forgot Password', async({page}) =>
    {

        const poluseremail = "Tehreem.Fatima@pakoxygen.com";
        const polnewpassword = "P@kistan01";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const forgotpassword = new ForgotPassword(page)

        await forgotpassword.NavigateToForgotPassword(poluseremail)

        // const emailHelper = new EmailHelper();
        // const resetLink = await emailHelper.GetResetLink(poluseremail);

        // await page.goto(resetLink);

        // await forgotpassword.ResetPassword(polnewpassword, polnewpassword)

    });
