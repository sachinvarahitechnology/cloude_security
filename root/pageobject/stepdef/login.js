var { Given, When, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 3000);
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect;

var loginpage=require('../page/loginpage.js')

Given('user on login page', function () {
      return loginpage.LOGIN();
  });

   