import {QuotationPipe} from './quotation.pipe';

describe('QuotationPipe', () => {
  it('create an instance', () => {
    const pipe = new QuotationPipe();
    expect(pipe).toBeTruthy();
  });
  it('replaces all &quot; with "', () => {
    const pipe = new QuotationPipe();
    expect(pipe.transform('Hello &quot;World&quot;!')).toEqual('Hello "World"!');
  });
  it('return null for falsy input', () => {
    const pipe = new QuotationPipe();
    expect(pipe.transform(undefined)).toBeNull();
  });
});
