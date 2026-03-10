const { test, expect } = require ('@playwright/test');
const AddList=require("../PageObject/list")

test.use({viewport:{width: 1366, height:768}})
test('Add New List', async({page}) =>
    {

        const polusername = "Tehreem.Fatima@pakoxygen.com";
        const polpassword = "P@kistan01";
        const polnewlistname = "Automation Users List 32";
        const pollistitem0 = "Alex Jane";
        const pollistitem1 = "Mark Allen"
        const pollistitem2 = "Sophie Lee";
        const pollistitem3 = "Brain Scott";
        const pollistitem4 = "Emily Clark";
        
        await page.goto("https://snd-pakoxygen.kuickapp.com/login/?callbackUrl=%2Fapplications%2F");

        const list = new AddList(page)

        await list.ListItemInactiveAndDelete(polusername, polpassword, polnewlistname, pollistitem0, pollistitem1, pollistitem2, pollistitem3, pollistitem4)
    });