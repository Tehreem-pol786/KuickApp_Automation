const { test, expect } = require ('@playwright/test');
const AddList=require("../PageObject/list")

test.use({viewport:{width: 1366, height:768}})
test('Add New List', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const polnewlistname = "Automation List Regression 27";
        const pollistitem0 = "Automation item 1";
        const pollistitem1 = "Automation item 2";
        const pollistitem2 = "Automation item 3";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const list = new AddList(page)

        await list.CreatNewList(polusername, polpassword, polnewlistname, pollistitem0, pollistitem1, pollistitem2)
    });