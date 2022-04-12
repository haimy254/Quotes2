import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}
  
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  // @EventEmitter(){}
    
  }
  

  //  upVote = 0;
//  downVote = 0;
//  totalVote=0;

//  function refreshResults () {
//   var results = document.getElementById('results');
// results.innerHTML = 'total: ' + (upVote + downVote);
//   results.innerHTML += '<br />upvote: ' + upVote;
//   results.innerHTML += '<br />downvote: ' + downVote;
// }

// document.getElementById('upvote-button').addEventListener('click', function () {
//   upVote++;
//   refreshResults();
// });

// document.getElementById('downvote-button').addEventListener('click', function () {
//   downVote++;
//   refreshResults();
// });
  // constructor() {}

  // ngOnInit() : void {}

