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
  
 

 # Common Scenario for Pre-Login and Login page 
 # That's why i create a one Feature file , on page file & one step file .

 #Test case for Pre-Login:---** 
           #  Scenario: I want to accept the permission required by the app, so that I can use the app
           #   When the user select Permitir on the Permission modal
           #   And user grant permissions
           #   Then the welcome carrousel should displayed

  
           # Scenario: I want to have a welcome onboarding of the app, so that I can be aware of the features of the app
           #   Given the user select Permitir on the Permission modal
           #   And user grant permissions
           #   Then user complete the welcome onboarding of the app


 #Test Case for Login:---** 
           # Scenario Outline: I want to login with my username and password so that I can visualize my home page
           #   Given the PreLogin is displayed
           #   When the user tap the button Acceder in Prelogin screen
           #   And user login with username "<username>" and "<password>"
           #   Then the screen of Dashboard should displayed

           #   Examples:
           #     | username    | password |
           #     | jordyaponte | 321321   |
