import { Component, OnInit, Input, Output, EventEmitter, , Upvote } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

   upvote = 0;
 downvote = 0;

 function refreshResults () {
  var results = document.getElementById('results');
results.innerHTML = 'total: ' + (upvote + downvote);
  results.innerHTML += '<br />upvote: ' + upvote;
  results.innerHTML += '<br />downvote: ' + downvote;
}

document.getElementById('upvote-button').addEventListener('click', function () {
  upvote++;
  refreshResults();
});

document.getElementById('downvote-button').addEventListener('click', function () {
  downvote++;
  refreshResults();
});
  constructor() {}

  ngOnInit() : void {}
}
