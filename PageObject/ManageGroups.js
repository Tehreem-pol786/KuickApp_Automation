const { test, expect } = require ('@playwright/test');
class Group
{

    constructor(page)
    {
        this.page=page
        this.username="#email"
        this.password="#password"
        this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
        this.avatar="//span[@class='ant-avatar-string']"
        this.administration="(//a[normalize-space()='Administration'])[1]"
        this.managegroups = "//a[normalize-space()='Manage Groups']"
        this.addgroup = "(//button[@class='ant-btn css-8c526y ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'])[1]"
        this.groupname = "//input[@id='gName']"
        this.search_user = "(//input[contains(@placeholder,'Search here')])[1]"
        this.slct_user_faizan = "//span[normalize-space()='Muhammad Faizan']"
        // this.push_button = "(//span[contains(@class,'ant-btn-icon')])[18]"
        this.push_button = "//span[@class='ant-btn-icon']//span[@aria-label='right']//*[name()='svg']"
        this.slct_user_automation = "//li[contains(@title,'Automation 19 User')]//input[contains(@type,'checkbox')]"
        this.add = "//button[@type='submit']"
        this.search = "//input[@placeholder='Search']"
        this.edit = "(//*[name()='svg'])[14]"
        this.close = "(//span[@aria-label='Close'])[2]"
        this.check_group = "(//div[@class='ant-select-selector'])[5]"
        this.waitforuser = "//td[normalize-space()='automation.user19@mailinator.com']"
        this.waitforgroupname = "(//span[@title='Test Automation Group 3'])[2]"
        this.searchgroup = "//input[@placeholder='Search']"
        this.waitforgrouptoappear = "//td[normalize-space()='Test Automation Group 3']"
        this.editgroup = "(//div[@class='ant-space-item'])[1]"
        this.clicksearch = "(//button[@class='ant-btn css-8c526y ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-icon-only ant-input-search-button'])[1]"
        this.waitforsearchtoappear = "(//span[@class='ant-input-affix-wrapper css-8c526y ant-input-outlined'])[1]"
        this.delete = "//li[contains(@title,'Automation 19 User')]//span[contains(@aria-label,'delete')]//*[name()='svg']"
        this.update = "//button[@type='submit']"
        this.closesuccessmessage = "//a[@aria-label='Close']"
        this.waitforgroupcontainer = "(//div[contains(@class,'ant-select-selector')])[5]"
        this.remove = "(//*[name()='svg'][@fill-rule='evenodd'])[9]"
        this.update2 = "(//button[@type='submit'])[2]"
        this.userscontaineringroup = "//ul[@class='ant-transfer-list-content ant-transfer-list-content-show-remove']"
        this.closegroup = "(//span[@aria-label='Close'])[1]"
        this.deletegroup = "(//button[@type='button'])[6]"
        this.entergroupname = "//input[@id='add-member_name']"
        this.okdelete = "(//span[normalize-space()='OK'])[1]"
        this.table = "//th[normalize-space()='Group Name']"
        this.managegroupheading = "//h4[normalize-space()='Manage Groups']"
    }

    async AddNewGroup(polusername, polpassword, automationgroup, polfaizan, polautomation)
    {
        
        await this.page.fill(this.username, polusername)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.password, polpassword)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.loginbutton)
        // await this.page.waitForTimeout(2000);
        
        await this.page.click(this.avatar)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.administration)

        await this.page.click(this.managegroups)
        // await this.page.waitForTimeout(1000);

        await expect(this.page.locator(this.managegroupheading)).toBeVisible();

        await this.page.click(this.addgroup)

        // await this.page.waitForLoadState('networkidle')
        
        // await this.page.locator(this.groupname).fill(automationgroup)
        //  await this.page.click(this.addgroup);

    // --- WAIT FOR GROUP NAME INPUT TO BE READY ---
        const groupInput = this.page.locator(this.groupname);
        await groupInput.waitFor({ state: 'attached', timeout: 30000 });
        await groupInput.waitFor({ state: 'visible', timeout: 30000 });
        await expect(groupInput).toBeEnabled({ timeout: 30000 });

    // Optional: handle potential overlay/spinner
       const spinner = this.page.locator('.ant-spin');
       if (await spinner.count() > 0) {
           await spinner.waitFor({ state: 'hidden', timeout: 30000 });
    }

    // Click to focus and fill
        await groupInput.click({ force: true });
        await groupInput.fill(automationgroup);
        await this.page.waitForTimeout(2000);

        await this.page.fill(this.search_user, polfaizan)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.slct_user_faizan)
        // await this.page.waitForTimeout(3000);
        
        await this.page.click(this.push_button)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.search_user, polautomation)

        await this.page.waitForLoadState('networkidle')
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.slct_user_automation)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.push_button)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.add)
        // await this.page.waitForTimeout(2000);

    }

     async EditGroup_DeleteUserFromGroup (polusername, polpassword, automation, automationgroup, polautomation)
    {
        // Delete user from the group and check it in user
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.avatar)

        await this.page.click(this.administration)
   
        await this.page.locator(this.search).fill(automation)
        await this.page.locator(this.clicksearch).click()

        await expect(this.page.locator(this.waitforuser)).toBeVisible();
        
        await this.page.click(this.edit)
        
        await expect(this.page.locator(this.waitforgroupcontainer)).toBeVisible();
        await expect(this.page.locator(this.check_group)).toContainText('Test Automation Group 3');

        await this.page.click(this.close)

        await this.page.click(this.managegroups)
        await this.page.waitForTimeout(1000);

        await this.page.locator(this.searchgroup).fill(automationgroup)
        await this.page.locator(this.clicksearch).click()
        await expect(this.page.locator(this.waitforgrouptoappear)).toBeVisible();

        await this.page.click(this.editgroup)

        await this.page.click(this.delete)

        await this.page.click(this.update)
        
        await this.page.click(this.closesuccessmessage)

        await expect(this.page.locator(this.avatar)).toBeVisible();

        await this.page.click(this.avatar)

        await this.page.click(this.administration)
   
        await this.page.locator(this.search).fill(automation)
        await this.page.locator(this.clicksearch).click()

        await expect(this.page.locator(this.waitforuser)).toBeVisible();
        
        await this.page.click(this.edit)
        
        await expect(this.page.locator(this.waitforgroupcontainer)).toBeVisible();

        await this.page.waitForTimeout(2000);
        await expect(this.page.locator(this.check_group)).not.toContainText('Test Automation Group 3');

        await this.page.click(this.close)


    }
     async EditGroup_AddUserFromGroup (polusername, polpassword, automation, automationgroup, polautomation)
    {
         // Add user from the group and then check it in the user
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton) 

        await this.page.click(this.avatar)

        await this.page.click(this.administration)

        await this.page.click(this.managegroups)
        await expect(this.page.locator(this.table)).toBeVisible();

        await this.page.locator(this.searchgroup).fill(automationgroup)
        await this.page.locator(this.clicksearch).click()
        // await this.page.keyboard.press('Enter');
        await expect(this.page.locator(this.waitforgrouptoappear)).toBeVisible();

        await this.page.click(this.editgroup)

        await this.page.fill(this.search_user, polautomation)

        await this.page.waitForTimeout(1000);
       
        await this.page.click(this.slct_user_automation) 

        await this.page.click(this.push_button)

        await this.page.click(this.update)
        
        await this.page.click(this.closesuccessmessage)

        await expect(this.page.locator(this.avatar)).toBeVisible();

        await this.page.click(this.avatar)

        await this.page.click(this.administration)
   
        await this.page.locator(this.search).fill(automation)
        await this.page.locator(this.clicksearch).click()

        await expect(this.page.locator(this.waitforuser)).toBeVisible();
        
        await this.page.click(this.edit)
        
        await expect(this.page.locator(this.waitforgroupcontainer)).toBeVisible();

        await this.page.waitForTimeout(1000);
        await expect(this.page.locator(this.check_group)).toContainText('Test Automation Group 3');

        await this.page.click(this.close)

    }

    async EditGroup_DeleteGroupFromProfile (polusername, polpassword, automation, automationgroup, polautomation)
    {
        // Delete group from the user and check it in group
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.avatar)

        await this.page.click(this.administration)
   
        await this.page.locator(this.search).fill(automation)
        await this.page.locator(this.clicksearch).click()

        await expect(this.page.locator(this.waitforuser)).toBeVisible();
        
        await this.page.click(this.edit)
        
        await expect(this.page.locator(this.waitforgroupcontainer)).toBeVisible();
        await expect(this.page.locator(this.check_group)).toContainText('Test Automation Group 3');

        await this.page.click(this.remove)

        await this.page.click(this.update2)
        
        await this.page.click(this.closesuccessmessage)
        await expect(this.page.locator(this.avatar)).toBeVisible();

        await this.page.click(this.avatar)

        await this.page.click(this.administration)

        await this.page.click(this.managegroups)
        await this.page.waitForTimeout(1000);

        await this.page.locator(this.searchgroup).fill(automationgroup)
        await this.page.locator(this.clicksearch).click()
        await expect(this.page.locator(this.waitforgrouptoappear)).toBeVisible();

        await this.page.click(this.editgroup)
        await expect(this.page.locator(this.userscontaineringroup)).toBeVisible();
        await expect(this.page.locator(this.userscontaineringroup)).not.toContainText('Automation User');

        await this.page.click(this.closegroup)

    }

    async EditGroup_DeleteGroup (polusername, polpassword, automationgroup, deletegroup)
    {
        // Delete group from the user and check it in group
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.avatar)

        await this.page.click(this.administration)

        await this.page.click(this.managegroups)
        await this.page.waitForTimeout(1000);

        await this.page.locator(this.searchgroup).fill(automationgroup)
        await this.page.locator(this.clicksearch).click()
        await expect(this.page.locator(this.waitforgrouptoappear)).toBeVisible();
        await this.page.waitForTimeout(2000);

        await this.page.click(this.deletegroup)
        await this.page.fill(this.entergroupname, deletegroup)
        await this.page.click(this.okdelete)

        await this.page.waitForTimeout(1000);

    }


     }


module.exports=Group;