const { test, expect } = require ('@playwright/test');
class AddList
{

    constructor(page)
    {
        this.page=page
        this.username="#email"
        this.password="#password"
        this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
        this.list="(//a)[5]"
        this.create_list="//span[normalize-space()='Create']"
        this.new_list_name="#create-list-form_name"
        this.add_field = "//span[normalize-space()='Add field']"
        this.list_row_0 = "(//input[@id='create-list-form_list_0_title'])[1]"
        this.list_row_1 = "(//input[@id='create-list-form_list_1_title'])[1]"
        this.list_row_2 = "(//input[@id='create-list-form_list_2_title'])[1]"
        this.list_row_3 = "(//input[@id='create-list-form_list_3_title'])[1]"
        this.list_row_4 = "(//input[@id='create-list-form_list_4_title'])[1]"
        this.list_row_5 = "(//input[@id='create-list-form_list_5_title'])[1]"
        this.save = "(//span[normalize-space()='Save'])[1]"
        this.reset = "//span[normalize-space()='Reset']"
        this.search = "//input[@placeholder='Search']"
        this.searchicon = "//span[@aria-label='search']//*[name()='svg']"
        this.listgrid = "(//div[@class='ant-card-body'])[2]"
        this.editlist = "//span[@aria-label='edit']//*[name()='svg']"
        this.upload = "//span[@class='ant-upload']//input[@type='file']"
        this.download = "//span[@aria-label='download']//*[name()='svg']"
        this.prompt = "//span[contains(text(),'Added 500 rows. 59 rows were discarded to keep the')]"
        this.notificationgrid = "//div[@class='ant-notification-notice-with-icon']"
        this.successnotification = "//div[contains(text(),'List updated successfully')]"
        this.toclick = "(//div[@class='ant-flex css-8c526y ant-flex-align-center ant-flex-justify-space-between'])[1]"
        this.deleteitem = "(//button[@type='button'])[6]"
        this.inactiveitem = "(//*[name()='svg'])[17]"
        this.inactivetab = ":text-is('Inactive Items')"
        this.addtoactive = "//button[@class='ant-btn css-8c526y ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-icon-only']//span[@aria-label='plus']//*[name()='svg']"
        this.activetab = ":text-is('Active Items')"
        this.close = "//span[@class='anticon anticon-close ant-notification-notice-close-icon']//*[name()='svg']"

    }

    async CreatNewList(polusername, polpassword, polnewlistname, pollistitem0, pollistitem1, pollistitem2)
    {
        
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.list)

        await this.page.click(this.create_list)

        await this.page.fill(this.new_list_name, polnewlistname)

        await this.page.fill(this.list_row_0, pollistitem0)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_1, pollistitem1)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_2, pollistitem2)

        await this.page.locator(this.save).click()

        await this.page.waitForTimeout(2000)

    }

    async ResetListUploadAndDownloadExcelAbove500(polusername, polpassword, polnewlistname)
    {
        
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.list)

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)

        await this.page.locator(this.reset).click()

        await this.page.locator(this.upload).setInputFiles("PageObject/Uploads/560_dummy_phone_numbers.xlsx")

        await expect(this.page.locator(this.prompt)).toContainText('Added 500 rows. 59 rows were discarded to keep the total under 500');
        
        await this.page.locator(this.download).click()

        await this.page.locator(this.save).click()

        await this.page.waitForTimeout(2000)

        // await this.page.locator(this.toclick).click()

        // await expect(this.page.locator(this.notificationgrid)).toBeVisible();

        // await expect(this.page.locator(this.notificationgrid)).toContainText('List updated successfully');

    }

    async ResetListUploadAndDownloadExcelLessThan500(polusername, polpassword, polnewlistname)
    {
        
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.list)

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)

        await this.page.locator(this.reset).click()

        await this.page.locator(this.upload).setInputFiles("PageObject/Uploads/5001_countries_names.xlsx")
        
        await this.page.locator(this.download).click()

        await this.page.locator(this.save).click()

        await this.page.waitForTimeout(2000)

        // await expect(this.page.locator(this.notificationgrid)).toBeVisible();

        // await expect(this.page.locator(this.notificationgrid)).toContainText('List updated successfully');


    }

      async ListItemInactiveAndDelete(polusername, polpassword, polnewlistname, pollistitem0, pollistitem1, pollistitem2, pollistitem3, pollistitem4, pollistitem5)
    {
        
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.list)

        await this.page.click(this.create_list)

        await this.page.fill(this.new_list_name, polnewlistname)

        await this.page.fill(this.list_row_0, pollistitem0)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_1, pollistitem1)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_2, pollistitem2)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_3, pollistitem3)

        await this.page.click(this.add_field)

        await this.page.fill(this.list_row_4, pollistitem4)

        await this.page.locator(this.save).click()

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)

        await this.page.click(this.inactiveitem)

        await this.page.locator(this.save).click()

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)

        await this.page.locator(this.inactivetab).click()

        await this.page.click(this.addtoactive)

        await this.page.click(this.activetab)

        await this.page.locator(this.save).click()

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)

        await this.page.click(this.deleteitem)

        await this.page.locator(this.save).click()

        await this.page.locator(this.close).click()

        await this.page.locator(this.close).click()

        await this.page.fill(this.search, polnewlistname)

        await this.page.click(this.searchicon)

        await expect(this.page.locator(this.listgrid)).toBeVisible();

        await this.page.click(this.editlist)



    }
}

module.exports=AddList;