const { test, expect } = require ('@playwright/test');
const Group=require("../PageObject/ManageGroups")


test('Manage Group', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const automationgroup = "Test Automation Group 3";
        const polfaizan = "Faizan";
        const polautomation = "automation 29"
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const ManageGroups = new Group(page)

        await ManageGroups.AddNewGroup(polusername, polpassword, automationgroup, polfaizan, polautomation)
    });