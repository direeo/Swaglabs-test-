Feature: Login functionality
  As a user
  I want to be able to login to the application
  So that I can access the inventory

  Background:
    Given I open the login page

  Scenario: Successful login with valid credentials
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Failed login with invalid credentials
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: Failed login with locked out user
    When I enter locked out user credentials
    And I click the login button
    Then I should see a locked out error message
    And I should remain on the login page

  Scenario: Failed login with empty credentials
    When I click the login button without entering credentials
    Then I should see an error message
    And I should remain on the login page

  Scenario: Failed login with empty username
    When I enter only password
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: Failed login with empty password
    When I enter only username
    And I click the login button
    Then I should see an error message
    And I should remain on the login page