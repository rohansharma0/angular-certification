import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  token: string = 'bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) {}

  //get company name by symbol
  getCompanyName(symbol: string) {
    const url = `https://finnhub.io/api/v1/search?q=${symbol}&token=${this.token}`;
    return this.http.get(url);
  }

  //get quote by symbol
  getQuote(symbol: string) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${this.token}`;
    return this.http.get(url);
  }

  //get sentiment by symbol
  getSentiment(symbol: string) {
    const date = new Date();
    const currentDate = date.toISOString().substring(0, 10);
    const previousDateObj = new Date(date.setMonth(date.getMonth() - 4));
    const previousDate = previousDateObj.toISOString().substring(0, 10);

    const url = `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=${previousDate}&to=${currentDate}&token=${this.token}`;
    return this.http.get(url);
  }
}
