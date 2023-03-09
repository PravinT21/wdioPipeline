const drivers = {
    chrome: { version: '110.0.5481.30' }, // https://chromedriver.chromium.org/
  }

exports.config = {
    runner: 'local',
    specs: [ './features/*.feature'  ],
    exclude: [  ],
    maxInstances: 10,
    capabilities: [{
     maxInstances: 5,
     browserName: 'chrome',
     port: 4444,
     acceptInsecureCerts: true,
     args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage']
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //services: ['chromedriver'], 
    services: [['selenium-standalone', {
        logPath: 'logs',
        installArgs: { drivers }, // drivers to install
        args: { drivers }, // drivers to use
     }]], 
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    onPrepare: function (config, capabilities) {
    },
   
    onComplete: function(exitCode, config, capabilities, results) {
    },
    
}
