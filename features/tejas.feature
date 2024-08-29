Feature: Pre login  
# //For pre-login and login page Common scenario's
  Scenario: I want to accept the permission required by the app, so that I can use the app
    When the user select Permitir on the Permission modal
    And user grant permissions
    And the welcome carrousel should displayed
    And user complete the welcome onboarding of the app
    And the user tap the button Acceder in Prelogin screen
    And use are on actual login page
    And verify the user id box and password box
    Then user login with username "<username>" and "<password>"

    Examples:
      | username    | password |
      | jordyaponte | 321321   |