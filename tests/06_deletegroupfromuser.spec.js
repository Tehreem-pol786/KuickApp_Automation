const { test, expect } = require ('@playwright/test');
const Group=require("../PageObject/ManageGroups")


test('Edit Group - Delete Group From User', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const automation = "automation.user7";
        const automationgroup = "Test Automation Group 3";
        const polautomation = "automation"
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const ManageGroups = new Group(page)

        await ManageGroups.EditGroup_DeleteGroupFromProfile(polusername, polpassword, automation, automationgroup, polautomation)
    });