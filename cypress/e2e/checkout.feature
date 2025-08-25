Feature: Checkout functionality
  As a logged in user with items in cart
  I want to complete the checkout process
  So that I can purchase my selected items

  Background:
    Given I am logged in to the application
    And I have items in my shopping cart
    And I am on the shopping cart page

  Scenario: Proceed to checkout
    When I click the checkout button
    Then I should be redirected to the checkout page
    And I should see the checkout form fields
    And I should see the continue and cancel buttons

  Scenario: Fill checkout form with valid information
    Given I am on the checkout page
    When I fill in the first name field
    And I fill in the last name field
    And I fill in the postal code field
    And I click the continue button
    Then I should be redirected to the checkout overview page

  Scenario: Fill checkout form with empty fields
    Given I am on the checkout page
    When I click the continue button without filling the form
    Then I should see an error message
    And I should remain on the checkout page

  Scenario: Fill checkout form with missing first name
    Given I am on the checkout page
    When I fill in only the last name and postal code
    And I click the continue button
    Then I should see an error message
    And I should remain on the checkout page

  Scenario: Fill checkout form with missing last name
    Given I am on the checkout page
    When I fill in only the first name and postal code
    And I click the continue button
    Then I should see an error message
    And I should remain on the checkout page

  Scenario: Fill checkout form with missing postal code
    Given I am on the checkout page
    When I fill in only the first name and last name
    And I click the continue button
    Then I should see an error message
    And I should remain on the checkout page

  Scenario: Cancel checkout process
    Given I am on the checkout page
    When I click the cancel button
    Then I should be redirected back to the inventory page

  Scenario: Verify checkout overview information
    Given I am on the checkout overview page
    Then I should see all cart items
    And I should see the subtotal
    And I should see the tax amount
    And I should see the total amount
    And the total should be calculated correctly
    And I should see the finish and cancel buttons

  Scenario: Complete checkout process
    Given I am on the checkout overview page
    When I click the finish button
    Then I should see the success message
    And I should see the completion text
    And I should see the back to products button

  Scenario: Cancel checkout from overview
    Given I am on the checkout overview page
    When I click the cancel button
    Then I should be redirected back to the inventory page

  Scenario: Return to products after completion
    Given I am on the checkout complete page
    When I click the back to products button
    Then I should be redirected back to the inventory page