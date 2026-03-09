const { test, expect } = require ('@playwright/test');
const AddDataset=require("../PageObject/Dataset")

test.use({viewport:{width: 1366, height:768}})
test('Add Dataset Entry', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const poldatasetname = "Automation Dataset 13";
        const faculties = ["Alex", "Malvin", "Carla", "Brain", "Rim", "Pam"];
        const departments = ["IT", "HR", "Support", "IT", "HR", "Support"];
        const numbers = ["3338588389", "3214949493", "3123949339", "3244848388", "3332284838", "3249499339"];


        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const Dataset = new AddDataset(page)

        // await Dataset.AddDatasetEnteries(polusername, polpassword, poldatasetname, polfaculty1, polIT, polfaculty1number, polfaculty2, polHR, polfaculty2number, polfaculty3, polTech, polfaculty3number, polfaculty4, polfaculty4number, polfaculty5, polfaculty5number, polfaculty6, polfaculty6number)
        await Dataset.AddDatasetEnteries(polusername, polpassword, poldatasetname, faculties, departments, numbers);
    });