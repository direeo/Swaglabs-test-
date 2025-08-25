Feature: Shopping Cart functionality
  As a logged in user
  I want to add items to my shopping cart
  So that I can purchase products

  Background:
    Given I am logged in to the application
    And I am on the inventory page

  Scenario: Add item to shopping cart
    When I add an item to the shopping cart
    Then the shopping cart badge should show "1"
    And the add button should change to remove button
    And I should be able to remove the item

  Scenario: Add multiple items to shopping cart
    When I add the first item to the shopping cart
    And I add the second item to the shopping cart
    Then the shopping cart badge should show "2"
    And both items should show remove buttons

  Scenario: Remove item from shopping cart
    Given I have an item in my shopping cart
    When I remove the item from the shopping cart
    Then the shopping cart badge should not be visible
    And the remove button should change back to add button

  Scenario: View shopping cart
    Given I have items in my shopping cart
    When I click on the shopping cart
    Then I should be redirected to the cart page
    And I should see all added items
    And I should see the continue shopping button
    And I should see the checkout button

  Scenario: Continue shopping from cart
    Given I am on the shopping cart page
    When I click continue shopping
    Then I should be redirected back to the inventory page