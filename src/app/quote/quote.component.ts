import { Quote } from './../quote';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  quotes: Quote[] = [
    new Quote(1, 'nelson', 'The best is yet to be', new Date(), 0, 0),
    new Quote(2, 'martin', 'Look before you lemp', new Date(), 0, 0),
    new Quote(3, 'mark', 'Once bitten twice shy', new Date(), 0, 0),
  ];
  addQuote: any;

  toggleDetails(index: number) {
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }

  // completeQuote(isComplete: any, index: number) {
  //   if (isComplete) {
  //     this.quotes.splice(index, 1);
  //   }
  // }

  deleteQuote(isDelete: any, index: number) {
    if (isDelete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  newQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  // }
  // submitQuote() {
  //   this.addQuote.emit(this.newQuote);
  // }
  // newQuote(_newQuote: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() {}

  ngOnInit(): void {}
}
