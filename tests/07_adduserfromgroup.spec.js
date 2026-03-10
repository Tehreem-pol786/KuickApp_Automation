const { test, expect } = require ('@playwright/test');
const Group=require("../PageObject/ManageGroups")


test('Edit Group - Delete User From The Group', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const automation = "automation.user32";
        const automationgroup = "Test Automation Group 3";
        const polautomation = "automation 32"
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const ManageGroups = new Group(page)

        await ManageGroups.EditGroup_AddUserFromGroup(polusername, polpassword, automation, automationgroup, polautomation)
    });