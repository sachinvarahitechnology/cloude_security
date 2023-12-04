var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');
const { elementIsEnabled } = require('selenium-webdriver/lib/until');
 


var PropertiesReader = require('properties-reader');
var propertyreader = PropertiesReader('pageobject/utils/conf.properties')

module.exports = {
    app_engg_element: {

        id: element(by.xpath('//input[@class="loginCont__input"]')),
        cross:element(by.xpath('//span[@class="logSprite icClose"]')),
        pass: element(by.xpath('//input[@data-cypress="password"]')),
        button: element(by.xpath('//input[@data-cypress="submit-sign-in-btn"]')),
        forgot: element(by.xpath('//label[@class="password"]/a')),
    },

    LOGIN: async function () {

        var ele = this.app_engg_element
        browser.ignoreSynchronization = true;
        await browser.get(propertyreader.get('URL')); 
        await browser.sleep(3000);
        await ele.id.sendKeys("123");
        await browser.sleep(2000);
        await ele.cross.click();
        await browser.sleep(4000);
        //await ele.button.click();
    },

    // FORGOT:async function(){
    //     var ele=this.app_engg_element
    //     await  browser.get('https://dribbble.com/session/new');
    //     await ele.forgot.click();
    // },
}