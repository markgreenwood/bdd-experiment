/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const { Given, Then, When } = require('cucumber');
const webdriver = require('selenium-webdriver');

const { By, until } = webdriver;
const { helpers, page } = require('../features/page-objects/google-search');

const browser = new webdriver.Builder()
  .forBrowser('chrome')
  .build();


Given(/^I have loaded Google$/, function () {
  return browser.get('https://google.com');
});

When(/^I search Google for "([^"]*)"$/, function (string) {
  return page.googleSearch.performSearch(string)
    .then(() => {
      console.log('Finding keywords', string);
      return browser.wait(until.elementsLocated(By.css('div.g')), 10000);
    })
    .then(resp => console.log(resp[0].getText()));
});

Then('The first result is {string}', function (string) {
  return 'pending';
});

/* eslint-enable */
