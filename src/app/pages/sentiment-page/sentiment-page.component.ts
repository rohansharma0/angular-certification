import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sentiment } from '../../models/sentiment';
import { FinnhubService } from '../../services/finnhub.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-sentiment-page',
  templateUrl: './sentiment-page.component.html',
  styleUrls: ['./sentiment-page.component.css'],
})
export class SentimentPageComponent implements OnInit {
  symbol: string;

  sentiments: Sentiment[] = [];
  loading: Boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private finnhub: FinnhubService,
    private loaderService: LoaderService
  ) {
    this.loaderService.loader.subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.symbol = res.get('symbol');
    });

    this.loadSentiment();
  }

  loadSentiment() {
    this.finnhub.getSentiment(this.symbol).subscribe((res: any) => {
      this.sentiments = res.data;

      console.log(res);
    });
  }
}
