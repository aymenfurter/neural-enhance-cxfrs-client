import { EnhancePage } from './app.po';

describe('enhance App', () => {
  let page: EnhancePage;

  beforeEach(() => {
    page = new EnhancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
