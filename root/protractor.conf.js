exports.config = {
    directConnect: true, 
    getPageTimeout: 180000,
    allScriptsTimeout: 180000,
    chromeDriver: 'C:/Users/SHUBH/Driver/chromedriver-119/chromedriver.exe',
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
        
    },
    
    specs: ['pageobject/Feature/login.feature'],
    
    cucumberOpts: {
        require: ['pageobject/stepdef/*.js'],            
        tags: '@tag1'
        
    },
    
    onPrepare: function() {
        browser.manage().window().maximize();
    }
};