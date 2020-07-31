# test similar to our navigation example test from Kitchensink
Feature: Navigation
  Scenario: cy.go() - go back or forward
    Given I am on Navigation page
    Then location includes "navigation"

    When I go "back"
    Then location should not include "navigation"

    When I go "forward"
    Then location includes "navigation"

    When I go by -1
    Then location should not include "navigation"

    When I go by 1
    Then location includes "navigation"
