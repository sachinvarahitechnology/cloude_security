// An example configuration file.
exports.config = {
  directConnect: true,
  chromeDriver: 'C:/Users/SHUBH/Driver/chromedriver-119/chromedriver.exe',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//root//index.js'],  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
