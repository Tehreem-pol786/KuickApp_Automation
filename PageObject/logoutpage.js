class LogOut
{

    constructor(page)
    {
        this.page=page
        this.avatar="//span[@class='ant-avatar-string']"
        this.logout="(//span[@class='ant-dropdown-menu-title-content'])[4]"
    }

    async LogoutFromApplication()
    {
        await this.page.click(this.avatar)
        await this.page.waitForTimeout(2000);

        await this.page.click(this.logout)
        await this.page.waitForTimeout(3000);

    }
}

module.exports=LogOut;


// class LogOut
// {

//     constructor(page)
//     {
//         this.page=page
//         this.avatar="//span[@class='ant-avatar-string']"
//         this.logout="(//span[@class='ant-dropdown-menu-title-content'])[4]"
//     }

//     async ClickAvatar()
//     {
//         await this.page.click(this.avatar)
//         await this.page.waitForTimeout(2000);

//     }

//     async ClickLogout()
//     {
//         await this.page.click(this.logout)
//         await this.page.waitForTimeout(3000);

//     }
// }

// module.exports=LogOut;