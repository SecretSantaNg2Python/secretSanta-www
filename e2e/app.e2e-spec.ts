import { SsappPage } from './app.po';

describe('ssapp App', function() {
  let page: SsappPage;

  beforeEach(() => {
    page = new SsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
