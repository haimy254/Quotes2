import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  // like:number;
  isComplete: any;


  // quoteComplete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }

  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }
  
 upVote(){
   this.quote.upVote += 1;
}
 downVote(){
    this.quote.downVote += 1;
 }
  constructor() {}

  ngOnInit(): void {
  }
}


  //  upVote = 0;
//  downVote = 0;
//  totalVote=0;


