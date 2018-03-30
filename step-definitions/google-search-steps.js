/* eslint-disable import/no-extraneous-dependencies, prefer-arrow-callback */
const { expect } = require('chai');
const { Given, Then, When, After } = require('cucumber');
const webdriver = require('selenium-webdriver');

const { By, until } = webdriver;

const browser = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

let result = '';

Given(/^I have loaded Google$/, async function () {
  return browser.get('https://google.com');
});

When(/^I search Google for "([^"]*)"$/, async function (string) {
  await browser.findElement(By.name('q')).sendKeys(string, webdriver.Key.ENTER);
  const searchResults = await browser.wait(until.elementsLocated(By.css('div.g')), 10000);
  result = await searchResults[0].getText();
  return result;
});

Then('The first result is {string}', function (string) {
  expect(result).to.contain(string);
});

After(async function () {
  return browser.quit();
});

/* eslint-enable */
