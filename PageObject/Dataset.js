const { test, expect } = require ('@playwright/test');
class AddDataset
{

    constructor(page)
    {
        this.page=page
        this.username="#email"
        this.password="#password"
        this.loginbutton="//button[@class='ant-btn css-1m1o6dw ant-btn-round ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-block']"
        this.dataset = "(//a)[4]"
        this.createdataset = "//span[normalize-space()='Create']"
        this.datasetname = "//input[@id='create-application-form_name']"
        this.datasetdescription = "#create-application-form_description"
        this.avatar="//span[@class='ant-avatar-string']"
        this.administration="(//a[normalize-space()='Administration'])[1]"
        this.next = "//button[@type='submit']"
        this.datasetfieldicon = "//span[@aria-label='ellipsis']//*[name()='svg']"
        this.textfield = "//span[normalize-space()='Text']"
        this.textfieldname = "//input[@id='field-settings_name']"
        this.textfieldhelpertext = "//input[@id='field-settings_helperText']"
        this.requiredfield = "//input[@id='field-settings_isRequired']"
        this.save = "//span[normalize-space()='Save']"
        this.dropdownfield = "//span[normalize-space()='Dropdown']"
        this.dropdownfieldname = "//input[@id='field-settings_name']"
        this.dropdownfieldhelpertext = "//input[@id='field-settings_helperText']"
        this.dropdownfieldsourcetype = "(//span[@class='ant-select-selection-item'])[1]"
        this.dropdownfieldselectlist = "//div[@class='ant-select-item-option-content'][normalize-space()='List']"
        this.dropdownfieldsourceoption = "//input[@id='field-settings_sourceOption']"
        this.dropdownfieldsourceoptionselectlistname = "//div[contains(text(),'Departments')]"
        this.numberfield = "//span[normalize-space()='Numbers']"
        this.numberfieldname = "//input[@id='field-settings_name']"
        this.numberfieldhelpertext = "//input[@id='field-settings_helperText']"
        this.numberfielddefaultvalue = "//input[@id='field-settings_defaultValue']"
        this.searchdataset = "//input[@placeholder='Search']"
        this.searchicon = "//span[@aria-label='search']//*[name()='svg']"
        this.editdataset = "//span[@title='edit dataset']//*[name()='svg']"
        // this.addfacultydata = "(//input[@id='dynamic-form_Text_20260225144643797_hbtrft'])[1]"
        this.addfacultydata = "input[id^='dynamic-form_Text_']"
        this.searchdept = "(//input[@id='rc_select_0'])[1]"
        this.slctdept = "//div[@class='ant-select-item-option-content']"
        // this.addfacultynumber = "//input[@id='dynamic-form_Numbers_20260225144651332_ffv0gk']"
        this.addfacultynumber = "input[id^='dynamic-form_Numbers_']"
        this.createentery = "//span[normalize-space()='Create']"
        
    }

    async AddNewDataset(polusername, polpassword, poldatasetname, poldatasetdescription, poltextfieldname, poltextfieldhelpertext, poldropdownfieldname, poldropdownfieldhelpertext, pollistname, polnumberfieldname, polnumberfieldhelpertext, polnumberfielddefaultvalue)
    {
        
        await this.page.fill(this.username, polusername)

        await this.page.fill(this.password, polpassword)

        await this.page.click(this.loginbutton)
        
        await this.page.click(this.dataset)

        await this.page.click(this.createdataset)

        await this.page.fill(this.datasetname, poldatasetname)

        await this.page.fill(this.datasetdescription, poldatasetdescription)

        await this.page.click(this.next)

        await this.page.click(this.datasetfieldicon)

        await this.page.click(this.textfield)

        await this.page.fill(this.textfieldname, poltextfieldname)

        await this.page.fill(this.textfieldhelpertext, poltextfieldhelpertext)

        await this.page.click(this.requiredfield)

        await this.page.click(this.save)

        await this.page.click(this.datasetfieldicon)

        await this.page.click(this.dropdownfield)

        await this.page.fill(this.dropdownfieldname, poldropdownfieldname)

        await this.page.fill(this.dropdownfieldhelpertext, poldropdownfieldhelpertext)

        await this.page.click(this.dropdownfieldsourcetype)

        await this.page.click(this.dropdownfieldselectlist)

        await this.page.fill(this.dropdownfieldsourceoption, pollistname)

        await this.page.click(this.dropdownfieldsourceoptionselectlistname)

        await this.page.click(this.save)

        await this.page.click(this.datasetfieldicon)

        await this.page.click(this.numberfield)

        await this.page.fill(this.numberfieldname, polnumberfieldname)

        await this.page.fill(this.numberfieldhelpertext, polnumberfieldhelpertext)

        await this.page.fill(this.numberfielddefaultvalue, polnumberfielddefaultvalue)

        await this.page.click(this.save)


    }

 async AddDatasetEnteries(polusername, polpassword, poldatasetname, faculties, departments, numbers) {
       await this.page.fill(this.username, polusername);
       await this.page.fill(this.password, polpassword);
       await this.page.click(this.loginbutton);

       await this.page.click(this.dataset);

       await this.page.fill(this.searchdataset, poldatasetname);
       await this.page.click(this.searchicon);
       await this.page.click(this.editdataset);

    // Loop over the entries
       for (let i = 0; i < faculties.length; i++) {
        // Fill Faculty Name
        await this.page.fill(this.addfacultydata, faculties[i]);

        // Select Department
        await this.page.fill(this.searchdept, departments[i]);
        await this.page.click(this.slctdept);

        // Fill Number
        await this.page.fill(this.addfacultynumber, numbers[i]);

        // Click Create
        await this.page.click(this.createentery);

        // Small wait to allow dynamic DOM update (optional but recommended)
        await this.page.waitForTimeout(500);
    }
}
}

module.exports=AddDataset;