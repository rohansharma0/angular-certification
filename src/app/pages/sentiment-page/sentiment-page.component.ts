import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sentiment-page',
  templateUrl: './sentiment-page.component.html',
  styleUrls: ['./sentiment-page.component.css'],
})
export class SentimentPageComponent implements OnInit {
  symbol: string;
  date: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.symbol = res.get('symbol');
    });

    this.loadSentiment();
  }

  loadSentiment() {
    this.date = new Date();
  }
}
