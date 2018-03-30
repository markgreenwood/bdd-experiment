/* eslint-disable import/no-extraneous-dependencies */
const { By } = require('selenium-webdriver');

module.exports = {
  url: 'https://www.google.com',
  elements: {
    searchInput: By.name('q'),
    searchResultLink: By.css('div.g > h3 > a')
  },
  /**
   * enters a search term into Google's search box and presses enter
   * @param {string} searchQuery
   * @returns {Promise} a promise to enter the search values
   */
  performSearch: function (searchQuery) {
    var selector = page.googleSearch.elements.searchInput;
    // return a promise so the calling function knows the task has completed
    return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER);
  }
};
