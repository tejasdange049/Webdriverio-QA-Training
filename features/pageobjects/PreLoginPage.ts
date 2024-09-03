import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import Page from "./page";
import commonsPage from "../pageobjects/commonPage.ts";


class PreLoginPage extends Page {

    get grantPermissiontxt() { return $('//android.widget.Button[@text="Allow"]') }
    get permissionTitle() { return $('//android.widget.TextView[@text="Por políticas de seguridad solicitamos permiso a tu móvil."]') }
    get permissionTxt() { return $('//android.widget.TextView[@text="Es requerido para aplicar y mantener los controles de seguridad al usar la aplicación en tu celular. Tu número de teléfono no será utilizado en esta solicitud."]') }
    get permissionPermitirBtn() { return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
    get siguienteCarouselBtn() { return $('//android.widget.TextView[@text="Siguiente"]') }
    get firstScreenCarouselTitle() { return $('//android.widget.TextView[@text="Bienvenido a una nueva \nexperiencia."]') }
    get parragraphFirstScreenCarousel() { return $('//android.widget.TextView[@text="Nos estamos transformando para que sigas \nhaciendo todo con mayor rapidez y \nseguridad."]') }
    get parragraphFourthScreenCarousel() { return $('//android.widget.TextView[@text="Inicia sesión y disfruta de todos \nnuestros beneficios."]') }
    get iniciarCarouselBtn() { return $('//android.widget.TextView[@text="Iniciar"]') }
    get fourthScreenCarouselTitle() { return $('//android.widget.TextView[@text="¡Empecemos!"]') }
    get parragraphSecondScreenCarousel() { return $('//android.widget.TextView[@text="Aprovecha los servicios y facilidades \npara el uso de tus productos."]') }
    get secondScreenCarouselTitle() { return $('//android.widget.TextView[@text="Te brindamos mejor control."]') }
    get parragraphThridScreenCarousel() { return $('//android.widget.TextView[@text="Para que tengas el control de tus finanzas \ndesde la palma de tus manos."]') }
    get thirdScreenCarouselTitle() { return $('//android.widget.TextView[@text="Encontrarás nuevas \nfuncionalidades."]') }
    get btnCerrar() { return $('//android.widget.TextView[@text = "Cerrar"]') }
   // get burgerMenuPreLoginBtn() { return $('//android.widget.TextView[@text="¿Aún no te has registrado?"]/..//following-sibling::android.view.View[1]') }
    get btnMasTransacciones() { return $('//android.widget.TextView[@text="Más\nTransacciones"]/..') }
    get preLoginTokenPopularBtn() { return $('//android.widget.TextView[@text="Token \n Popular"]/..') }
    get btnAunNoTeHasRegistrado() { return $('//android.widget.TextView[@text="¿Aún no te has registrado?"]') }
    get contactosTurnosYcitasBtn() { return $('//android.widget.TextView[@text="Contactos,\n turnos y citas "]/..') }
    get preLoginAccederBtn() { return $('//android.widget.TextView[@text = "Acceso clientes"]/..') }
    get titleTokenPopular() { return $('//android.widget.TextView[@text="Token Popular"]') }

    get usernameLbl() { return $('//android.widget.TextView[@text = "Usuario"]/../..') }
    get passwordLbl() { return $('//android.widget.TextView[@text="Contraseña"]/../..') }
    get accederLoginBtn() { return $('//android.widget.TextView[@text="Acceder"]') }
    get typeCodeField() { return $('//android.widget.TextView[@text="Ingrese Token Popular"]/../..') }
    get ValidarTokenPopularBtn() { return $('//android.widget.TextView[@text="Validar Token Popular"]') }

    get Validdeskokbtn(){return $('//android.widget.TextView[@text = "De acuerdo" or . = "De acuerdo")]')}
    get dashbordlogo(){ return $('//android.widget.TextView[contains(@text,"Hola")]/preceding-sibling::android.view.View[1]')}
    get menuopen(){ return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]")}
    get lrbtn(){return $('//android.widget.TextView[@text = "Ir al inicio" or . = "Ir al inicio"]')}
    get menubaracc(){ return $('android.widget.TextView[@text = "¿Qué deseas hacer?" or . = "¿Qué deseas hacer?")]')}
    get upp(){return $('//android.widget.TextView[@text = "UP" or . = "UP"]')}
    get upbtn(){return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]")}
    get transferirBtn(){return $('//android.widget.TextView[@text ="Transferir"]')}


    get burgerMenuPreLoginBtn() { return $('//android.widget.TextView[@text="¿Aún no te has registrado?"]/..//following-sibling::android.view.View[1]') }
    get bmQueDeseasHacerTxt() { return $('//android.widget.TextView[@text = "¿Qué deseas hacer?"]') }
    get transtext(){return $('//android.widget.TextView[@text = "¿A dónde deseas transferir?" or . = "¿A dónde deseas transferir?")]')}
    get snackBarTransferir() { return $('//android.view.View[@content-desc="Transferir"]') }
    get aDondeDeseasTransferir() { return $('//android.widget.TextView[@text="¿A dónde deseas transferir?"]') }


    async validate() {
    }
   

    async grantPermissions() {
        await (await this.grantPermissiontxt).waitForDisplayed();
        await (await this.grantPermissiontxt).click();
    }

    async validatePermissionScreen() {
        await commonsPage.validateElement("Permisos de seguridad")
        await commonsPage.validateElement("App Popular requiere colectar, almacenar, enviar y procesar:\n\nNúmero de teléfono: \nLa aplicación utiliza el número de teléfono para mantener los controles de seguridad, crear la sesión del cliente y prevenir fraudes.\n")
        await commonsPage.validateElement("Al aceptar, consientes nuestras\nPolíticas de Privacidad y los Términos y Condiciones de Uso.")
        await commonsPage.validateElement("Aceptar")
        await commonsPage.validateElement("Ahora no")


    }

    async allowPermission() {
        await (await this.permissionPermitirBtn).waitForDisplayed({ timeout: 3000 });
        await (await this.permissionPermitirBtn).click();
    }
    
    async validateCarrousel() {
        await (await this.firstScreenCarouselTitle).waitForDisplayed({ timeout: 6000 })
        await expect(this.parragraphFirstScreenCarousel).toBeDisplayed();
        await expect(this.siguienteCarouselBtn).toBeDisplayed();
    }
    
    async completeWelcomeOnboarding() {
        for (var i = 0; i < 20; i++) {
            if (await (await this.firstScreenCarouselTitle).isDisplayed()) {
                await expect(this.firstScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphFirstScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.secondScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphSecondScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.thirdScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphThridScreenCarousel).toBeDisplayed();
                await expect(this.siguienteCarouselBtn).toBeDisplayed();
                await (await this.siguienteCarouselBtn).click();

                await expect(this.fourthScreenCarouselTitle).toBeDisplayed();
                await expect(this.parragraphFourthScreenCarousel).toBeDisplayed();
                await expect(this.iniciarCarouselBtn).toBeDisplayed();
                await (await this.iniciarCarouselBtn).click();
                break;
            }
        }
    }
    
    async cerrar(){
        for (var i = 0; i < 20; i++) {
            if (await (await this.btnCerrar).isDisplayed()) {
                await (await this.btnCerrar).click();
                break;
            }
        }
    }
    async selectAccederButtonPreLogin() {
        await (await this.preLoginAccederBtn).waitForDisplayed();
        await (await this.preLoginAccederBtn).click();
    }
    
    async mainlogin(){
        await (await this.titleTokenPopular).isDisplayed();
    }
    async verifyloginbox(){
        await (await this.usernameLbl).isDisplayed();
        await (await this.passwordLbl).isDisplayed();
    }
    async validateIfTokenIsUp(tokenPopular: string) {
        if (await (await this.typeCodeField).isDisplayed()) {
            await (await this.typeCodeField).waitForDisplayed();
            await (await this.typeCodeField).addValue(tokenPopular);
            await (await this.ValidarTokenPopularBtn).click();
        }
    }
    async login(username: string, password: string) {
        await expect(this.usernameLbl).toBeDisplayed();
        await expect(this.passwordLbl).toBeDisplayed();

        await (await this.usernameLbl).setValue(username);
        await (await this.passwordLbl).setValue(password);

        await (await this.accederLoginBtn).click();
    }
    

    async logocheck(){
        
     await expect(await this.transferirBtn).toBeDisplayed();
     await(await this.transferirBtn).click();
    await expect(await this.aDondeDeseasTransferir).toBeDisplayed();
  
     }
    
//    async menutuch(){
//     await expect(await this.menuopen).toBeDisplayed();
//      await (await this.menuopen).click();
//      }

//   async menubaracce(){
//     await (await this.menubaracc).isDisplayed();
 
//   }

// async preloginmenuoption(){
//     await expect(await this.burgerMenuPreLoginBtn).toBeDisplayed();
//     await(await this.burgerMenuPreLoginBtn).click();

//     await expect(await this.bmQueDeseasHacerTxt).toBeDisplayed();

// }


}
export default new PreLoginPage();