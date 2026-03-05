const { test, expect } = require ('@playwright/test');
const Group=require("../PageObject/ManageGroups")


test('Edit Group - Delete Group', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const automation = "automation";
        const deletegroup = "Test Automation Group 2";
        const automationgroup = "Test Automation Group 2";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const ManageGroups = new Group(page)

        await ManageGroups.EditGroup_DeleteGroup(polusername, polpassword, automationgroup, deletegroup)
    });