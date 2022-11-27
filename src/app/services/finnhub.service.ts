import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  token: string = 'bu4f8kn48v6uehqi3cqg';

  constructor(private http: HttpClient) {}

  getCompanyNameBySymbol(sybmol: string) {
    const url = `https://finnhub.io/api/v1/search?q=${sybmol}&token=${this.token}`;
    return this.http.get(url);
  }
}
