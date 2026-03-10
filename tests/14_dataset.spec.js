const { test, expect } = require ('@playwright/test');
const AddDataset=require("../PageObject/Dataset")

test.use({viewport:{width: 1366, height:768}})
test('Add New Dataset', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const poldatasetname = "Automation Dataset 30";
        const poldatasetdescription = "Automation dataset for testing purpose";
        const poltextfieldname = "Faculty Name"
        const poltextfieldhelpertext = "Member Name"
        const poldropdownfieldname = "Departments List"
        const poldropdownfieldhelpertext = "Select Department"
        const pollistname = "Department"
        const polnumberfieldname = "Faculty Emergency Number"
        const polnumberfieldhelpertext = "Enter Faculty Phone Number"
        const polnumberfielddefaultvalue = "+92"


        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const Dataset = new AddDataset(page)

        await Dataset.AddNewDataset(polusername, polpassword, poldatasetname, poldatasetdescription, poltextfieldname, poltextfieldhelpertext, poldropdownfieldname, poldropdownfieldhelpertext, pollistname, polnumberfieldname, polnumberfieldhelpertext, polnumberfielddefaultvalue)
    });