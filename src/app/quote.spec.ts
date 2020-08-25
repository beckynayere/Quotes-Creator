
// import { Quote } from './quote';
// import { QuoteComponent } from './quote/quote.component';

// describe('Quote', () => {
//   it('should create an instance', () => {
//     expect(new Quote).toBeTruthy();
//     expect(new QuoteComponent()).toBeTruthy();
//   });
// });
import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote()).toBeTruthy();
  });
});
