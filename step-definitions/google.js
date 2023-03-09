const { Given, When, Then } = require('@wdio/cucumber-framework');

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

Given(/^I open google home page$/, async () => {
    await browser.url("https://google.com.au");
});

Then(/^Validate the home page title (.+)$/, async (text) => {
    let pageTitle = await browser.getTitle();
    console.log("===print===",pageTitle);
    console.log("==from feature=print===",text);
    await expect(pageTitle).toEqual(text);
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
