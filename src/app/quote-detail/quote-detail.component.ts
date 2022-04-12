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
  private _clickCounter: any;

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  
 QuoteDetailComponent (_clickCounter: any){
   this._clickCounter.emit(_clickCounter)
 }
  constructor() {}

  ngOnInit(): void {
  }
}


  //  upVote = 0;
//  downVote = 0;
//  totalVote=0;


