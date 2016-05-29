import { Ng2SimonPage } from './app.po';

describe('ng2-simon App', function() {
  let page: Ng2SimonPage;

  beforeEach(() => {
    page = new Ng2SimonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-simon works!');
  });
});
