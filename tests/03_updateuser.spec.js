const { test, expect } = require ('@playwright/test');
const AddUser=require("../PageObject/CreateUser")


test('Update User', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const automation = "automation.user15@mailinator.com";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const CreateUser = new AddUser(page)

        await CreateUser.UpdateUser(polusername, polpassword, automation)
    });