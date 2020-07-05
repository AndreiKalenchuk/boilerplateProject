describe('', () => {

  it('open Google page', () => {
    browser.url('https://amazon.com');
    expect(browser).toHaveTitleContaining('Amazon')
  });
});