import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  token: string = 'bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) {}

  getCompanyName(symbol: string) {
    const url = `https://finnhub.io/api/v1/search?q=${symbol}&token=${this.token}`;
    return this.http.get(url);
  }

  getQuote(symbol: string) {
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${this.token}`;
    return this.http.get(url);
  }
}
