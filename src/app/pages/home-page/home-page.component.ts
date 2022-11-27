import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { FinnhubService } from '../../services/finnhub.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private localStorage: LocalStorageService,
    private finnhub: FinnhubService
  ) {}

  stockSymbols: string[] = [];

  stocks: Stock[] = [];

  addSymbol(symbol: string) {
    //add symbol to stockSymbols array
    this.stockSymbols.push(symbol);

    //get stock by symbol and add to stocks array
    this.addStockBySymbol(symbol);
  }

  remove(stock: string) {
    // Remove symbol from array
    this.stockSymbols = this.stockSymbols.filter((item) => item !== stock);

    // Remove stock from localStorage
    this.localStorage.removeStockSymbol(stock);
  }

  ngOnInit() {
    //get all symbols from localStorage
    this.stockSymbols = this.localStorage.getAllStocksSymbols();

    //get all stocks updated initially
    this.stockSymbols.forEach((sym) => {
      this.addStockBySymbol(sym);
    });
  }

  addStockBySymbol(symbol: string) {
    //--------------FIX-----------------
    this.finnhub.getCompanyNameBySymbol(symbol).subscribe((data: any) => {
      this.stocks.push({
        symbol: symbol,
        companyName: data?.result[0]?.description,
      });
    });
  }
}
