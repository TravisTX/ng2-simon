export class Ng2SimonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-simon-app h1')).getText();
  }
}
