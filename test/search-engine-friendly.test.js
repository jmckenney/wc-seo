import { html, fixture, expect } from '@open-wc/testing';

import '../src/search-engine-friendly';

describe('<search-engine-friendly>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<search-engine-friendly></search-engine-friendly>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <search-engine-friendly title="different"></search-engine-friendly>
    `);
    expect(el.title).to.equal('different');
  });
});
