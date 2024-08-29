import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import PreLoginPage from '../pageobjects/PreLoginPage.ts';


// When(/^the user select Permitir on the Permission modal$/, async () => {
//     await PreLoginPage.validatePermissionScreen();
//     await PreLoginPage.allowPermission();

// });

// When(/^user grant permissions$/, async () => {
//     await PreLoginPage.grantPermissions();
//     //await LoginPage.selectLoHareLuego();

// });

// Then(/^the welcome carrousel should displayed$/, async () => {
//     try {
//         await PreLoginPage.validateCarrousel();
//     } catch (Exception) {
//         await PreLoginPage.completeWelcomeOnboarding();
//     }
// });
