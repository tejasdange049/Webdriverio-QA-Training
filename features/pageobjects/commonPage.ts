import Page from './page';
import { $ } from '@wdio/globals'

class CommonPage extends Page {

    get btnBackBtn() { return $('//android.widget.Button[@content-desc="WelcomeScreen, back"]/android.view.ViewGroup') }

    async validate(): Promise<void> {
        await this.btnBackBtn;
    }
    async validateXpath(text: string) {
        const elem = await $('//*[@text="' + text + '"]');
        await (await elem).waitForDisplayed({ timeout: 6000 });
         
    }
    async createXpath(text: string) {
         const elem = await $("//*[contains(@text,'" + text + "')]");
        return elem;
    }

    async validateElement(name: string) {
        const element = await this.createXpath(name)
        await (await element).waitForDisplayed();
    }

}
export default new CommonPage();
