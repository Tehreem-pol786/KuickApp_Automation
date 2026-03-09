class AddUser
{

    constructor(page)
    {
        this.page=page
        this.username="#email"
        this.password="#password"
        this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
        this.avatar="//span[@class='ant-avatar-string']"
        this.administration="(//a[normalize-space()='Administration'])[1]"
        this.add_user="//button[@class='ant-btn css-8c526y ant-btn-primary ant-btn-color-primary ant-btn-variant-solid']"
        this.first_name = "#fName"
        this.last_name = "#lName"
        this.email = "#email"
        this.manager = "#manager"
        this.slct_manager = "//div[contains(text(),'Syed Waseem Sajjad')]"
        this.role = "#role"
        this.slct_role_admin = "(//div[@class='ant-select-item-option-content'][normalize-space()='Admin'])[1]"
        this.slct_role_admin1 = "(//span[@title='Admin'][normalize-space()='Admin'])[2]"
        this.new_password = "#newPassword"
        this.confirm_password = "#confirmPassword"
        this.submit = "//button[@type='submit']"
        this.search = "//input[@placeholder='Search']"
        this.edit = "(//*[name()='svg'])[14]"
        this.slct_role_user = "//div[@title='User']"
        this.update = "(//button[@type='submit'])[2]"
        this.search_status = "//span[@class='ant-select-selection-search']"
        this.status_active = "(//div[@class='ant-select-item-option-content'][normalize-space()='Active'])[1]"
        this.status_inactive = "(//div[contains(text(),'Inactive')])[1]"
        this.search_status_again = "//span[@title='Active']"
        this.managegroups = "(//a)[3]"
        this.addgroup = "//button[contains(@class,'ant-btn css-8c526y ant-btn-primary ant-btn-color-primary ant-btn-variant-solid')]"
        this.groupname = "gName"
        this.search_user = "(//input[contains(@placeholder,'Search here')])[1]"
        this.slct_user_faizan = "//span[normalize-space()='Muhammad Faizan']"
        this.push_button = "(//span[contains(@class,'ant-btn-icon')])[18]"
        this.slct_user_automation = "//li[contains(@title,'Automation 7 User')]//input[contains(@type,'checkbox')]"
        this.add = "//button[@type='submit']"
        this.searchicon = "//span[@aria-label='search']//*[name()='svg']"

    }

    async CreatNewUser(polusername, polpassword, polfirstname, pollastname, polnewuseremail, polmanager, polnewpassword, polconfirmpassword)
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
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.add_user)
        // await this.page.waitForTimeout(2000);
        
        await this.page.fill(this.first_name, polfirstname)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.last_name, pollastname)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.email, polnewuseremail)
        // await this.page.waitForTimeout(3000);

        await this.page.fill(this.manager, polmanager)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.slct_manager)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.role)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.slct_role_admin)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.new_password, polnewpassword)
        // await this.page.waitForTimeout(2000);

        await this.page.fill(this.confirm_password, polconfirmpassword)
        await this.page.waitForTimeout(2000);

        await this.page.click(this.submit)
        // await this.page.waitForTimeout(2000);

    }

        async UpdateUser(polusername, polpassword, automation)
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
        // await this.page.waitForTimeout(2000);

        await this.page.locator(this.search).fill(automation)
        await this.page.click(this.searchicon);

        await this.page.waitForTimeout(1000);
        
        await this.page.click(this.edit)
        // await this.page.waitForTimeout(2000);

        await this.page.waitForLoadState('networkidle')

        await this.page.click(this.slct_role_admin1)
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.slct_role_user)
        // // await this.page.waitForTimeout(2000);

        await this.page.click(this.update)
        // await this.page.waitForTimeout(2000);

}

       async SearchUserWithStatus(polusername, polpassword)
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
        // await this.page.waitForTimeout(2000);
        
        await this.page.locator(this.search_status).click()
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.status_active)
        await this.page.waitForTimeout(1000);

        await this.page.locator(this.search_status_again).click()
        // await this.page.waitForTimeout(2000);

        await this.page.click(this.status_inactive)
        await this.page.waitForTimeout(2000);

}

 }


module.exports=AddUser;