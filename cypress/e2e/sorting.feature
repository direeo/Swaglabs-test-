Feature: Product Sorting functionality
  As a logged in user
  I want to sort products by different criteria
  So that I can find products in my preferred order

  Background:
    Given I am logged in to the application
    And I am on the inventory page

  Scenario: Sort products by price high to low
    When I select "Price (high to low)" from the sort dropdown
    Then the products should be sorted by price from highest to lowest
    And the sort dropdown should show "Price (high to low)" as selected

  Scenario: Sort products by price low to high
    When I select "Price (low to high)" from the sort dropdown
    Then the products should be sorted by price from lowest to highest
    And the sort dropdown should show "Price (low to high)" as selected

  Scenario: Sort products by name A to Z
    When I select "Name (A to Z)" from the sort dropdown
    Then the products should be sorted by name alphabetically from A to Z
    And the sort dropdown should show "Name (A to Z)" as selected

  Scenario: Sort products by name Z to A
    When I select "Name (Z to A)" from the sort dropdown
    Then the products should be sorted by name alphabetically from Z to A
    And the sort dropdown should show "Name (Z to A)" as selected

  Scenario: Verify default sorting
    Then the sort dropdown should show "Name (A to Z)" as selected by default
    And the products should be sorted by name alphabetically from A to Z

  Scenario: Sort products after adding to cart
    Given I have added an item to my shopping cart
    When I sort products by price high to low
    Then the products should be sorted by price from highest to lowest
    And my cart item should still show the remove button
    And the shopping cart badge should still show the correct count