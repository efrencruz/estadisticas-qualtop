import { ReportesQualtopPage } from './app.po';

describe('reportes-qualtop App', function() {
  let page: ReportesQualtopPage;

  beforeEach(() => {
    page = new ReportesQualtopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
