/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');

module.exports = function () {
  this.Given(/^I have loaded Google$/, function () {
    return helpers.loadPage('https://google.com');
  });

  this.When(/^I search Google for "([^"]*)"$/, function (string) {
    return page.googleSearch.performSearch(string)
      .then(() => {
        console.log('Finding keywords', string);
        return driver.wait(until.elementsLocated(by.partialLinkText(string)), 10000);
      });
  });

  this.Then('The first result is {string}', function (string) {
    return 'pending';
  });
};

/* eslint-enable */
