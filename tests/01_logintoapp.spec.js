const { test, expect } = require ('@playwright/test');
const LoginPage=require("../PageObject/loginpage")
const LogOut=require("../PageObject/logoutpage")

test('Login To Application', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const loginpage = new LoginPage(page)

        await loginpage.LoginToApplication(polusername, polpassword)

        const logoutpage = new LogOut(page)

        await logoutpage.LogoutFromApplication()
    });


// const { test, expect } = require ('@playwright/test');
// const LoginPage=require("../PageObject/loginpage")
// const LogOut=require("../PageObject/logoutpage")

// test('Login To Application @login', async({page}) =>
//     {

//         const polusername = "Tehreem.Fatima@pakoxygen.com";
//         const polpassword = "P@kistan01";
        
//         await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

//         const loginpage = new LoginPage(page)

//         await loginpage.FillUsername(polusername)
//         await loginpage.FillPassword(polpassword)
//         await loginpage.ClickLoginButton()
//     });

//     test('Logout From Application', async({page}) =>
//     {

//         const polusername = "Tehreem.Fatima@pakoxygen.com";
//         const polpassword = "P@kistan01";
        
//         await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

//         const loginpage = new LoginPage(page)
//         const logoutpage = new LogOut(page)

//         await loginpage.FillUsername(polusername)
//         await loginpage.FillPassword(polpassword)
//         await loginpage.ClickLoginButton()
//         await logoutpage.ClickAvatar()
//         await logoutpage.ClickLogout()
//     });