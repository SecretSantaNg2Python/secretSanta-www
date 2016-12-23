import { SSAppPage } from './app.po';

describe('ssapp App', function() {
  let page: SSAppPage;

  beforeEach(() => {
    page = new SSAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
