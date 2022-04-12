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
    new Quote(
      1,
      'the best is yet to be',
      'Find an online version and watch merlin find his son',
      new Date(),
      0,
      0,
      0
    ),
    new Quote(
      2,
      'look before you lemp',
      'I have to buy cookies for the parrot',
      new Date(),
      0,
      0,
      0
    ),
    new Quote(
      3,
      'once bitten twice shy',
      'Diana has her birthday coming up soon',
      new Date(),
      0,
      0,
      0
    ),
  ];

  toggleDetails(index: number) {
    this.quotes[index].showauthor = !this.quotes[index].showauthor;
  }

  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  totalVote() {}
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  // addNewQuote(quote:Quote) {
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength + 1;
  //   quote.completeDate = new Date(quote.completeDate);
  //   this.quotes.push(quote);
  // }

  constructor() {}

  ngOnInit(): void {}
}
