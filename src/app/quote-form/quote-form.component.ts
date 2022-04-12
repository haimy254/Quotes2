import { Quote } from '../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, '', '', new Date(), 0, 0, 0);
  @Output() addGoal = new EventEmitter<Quote>();

  submitGoal() {
    this.addGoal.emit(this.newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
