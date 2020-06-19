import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqList: Array<String> = ['Why it is called fliiTree?', 'Why should I care?', 'What can I do with the individual account?',
   'What can go with the company account?'];

  constructor() { }

  ngOnInit() {
  }

}
