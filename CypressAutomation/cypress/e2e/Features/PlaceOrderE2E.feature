Feature: Place orders end to end flows

  Background:
    Given I am on the login page

  Scenario: Login with valid credentials
    When I enter my valid <username> and <password>
    And I click the login button
    Then I should be redirected to the inventory page

  @Regression
  Scenario Outline: Order a product with valid data
    Given I am on the inventory page
    When I select an <item> to order
    And I enter valid order details with <firstname>, <lastname>, and <postalcode>
    And I place the order
    Then I should see a thank you message

    Examples:
      | item                 | firstname | lastname | postalcode |
      | Sauce Labs Backpack  | John      | Brown    | 1234       |
      | Sauce Labs Bike Light| Mike      | Dan      | 1234       |

  @Regression
  Scenario Outline: Order a different product with valid data
    Given I am on the inventory page
    When I select a different <item> to order
    And I enter valid order details with <firstname>, <lastname>, and <postalcode>
    And I place the order
    Then I should see a thank you message

    Examples:
      | item                 | firstname | lastname | postalcode |
      | Sauce Labs Bolt T-Shirt| Sarah   | Smith    | 5678       |
      | Sauce Labs Fleece Jacket| Alex  | Johnson | 5678       |
