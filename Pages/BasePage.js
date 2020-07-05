export default class BasePage {
    open() {
        browser.url(''); // open baseUrl from wdio.config.js
        browser.maximizeWindow();
        browser.deleteAllCookies();
    }
}