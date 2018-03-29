Feature: Searching for vote cards app
  As an internet user
  In order to find out more about the itunes vote cards app
  I want to be able to search for information about the itunes vote cards app

  Scenario: Google search for vote cards app
    Given I have loaded Google
    When I search Google for "Cucumber.js"
    Then The first result is "GitHub - cucumber/cucumber-js: Cucumber for JavaScript"