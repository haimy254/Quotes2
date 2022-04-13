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
  like:number;


  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  
 upVote(){
   this.quote.like += 1;
}
 downVote(){
    this.quote.like += 1;
 }
  constructor() {}

  ngOnInit(): void {
  }
}


  //  upVote = 0;
//  downVote = 0;
//  totalVote=0;


