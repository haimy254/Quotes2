import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, '', '', new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();
  quote: any;
  quotes: any;
  add: any;

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  addquote(){
    this.add.emit(this.newQuote)
    this.newQuote =new Quote(0, '', '', new Date(), 0, 0);
  }

  constructor() {}

  ngOnInit(): void {}
}
