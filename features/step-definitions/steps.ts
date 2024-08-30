import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import PreLoginPage from '../pageobjects/PreLoginPage.ts';
import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });


When(/^the user select Permitir on the Permission modal$/, async () => {
    await PreLoginPage.validatePermissionScreen();
    await PreLoginPage.allowPermission();
});

When(/^user grant permissions$/, async () => {
    await PreLoginPage.grantPermissions();
    //await LoginPage.selectLoHareLuego();

});

When(/^the welcome carrousel should displayed$/, async () => {
    try {
        await PreLoginPage.validateCarrousel();
    } catch (Exception) {
        await PreLoginPage.completeWelcomeOnboarding();
    }
});
When(/^user complete the welcome onboarding of the app$/, async () => {
    await PreLoginPage.completeWelcomeOnboarding();
    await PreLoginPage.cerrar();
});

When(/^the user tap the button Acceder in Prelogin screen$/, async() => {
	await PreLoginPage.selectAccederButtonPreLogin();
    
});

Then(/^use are on actual login page$/, async() => {
	await PreLoginPage.mainlogin();
});

Then(/^verify the user id box and password box$/, async() => {
    await PreLoginPage.verifyloginbox();
 });

Then(/^user login with username "([^"]*)" and "([^"]*)"$/, async(username:string, password:string) => {
     
        await PreLoginPage.login(username, password);
        await PreLoginPage.validateIfTokenIsUp('321321');
 
});

 
Then(/^verify Dashboard$/, async() => {
    await PreLoginPage.logocheck();
});


Then(/^click the menubar$/, async() => {
    await PreLoginPage.menutuch();
});


Then(/^verify menubar acccess$/, async() => {
     await PreLoginPage.menubaracce();
});
 

