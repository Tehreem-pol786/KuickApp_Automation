const { test, expect } = require ('@playwright/test');
const AddUser=require("../PageObject/CreateUser")


test('Update User', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const polfirstname = "Automation 7";
        const pollastname = "User";
        const polnewuseremail = "automation.user7@mailinator.com"
        const polmanager = "syed waseem sajjad"
        const polnewpassword = "P@kistan01"
        const polconfirmpassword = "P@kistan01";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const CreateUser = new AddUser(page)

        await CreateUser.CreatNewUser(polusername, polpassword, polfirstname, pollastname, polnewuseremail, polmanager, polnewpassword, polconfirmpassword)
    });