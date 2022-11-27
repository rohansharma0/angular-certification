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

  ngOnInit() {
    //get all symbols from localStorage
    this.stockSymbols = this.localStorage.getAllStocksSymbols();

    //get all stocks updated initially
    this.updateStocks();
  }

  updateStocks() {
    this.stockSymbols.forEach((symbol) => {
      this.addStockBySymbol(symbol);
    });
  }

  addSymbol(symbol: string) {
    //add symbol to stockSymbols array
    this.stockSymbols.push(symbol);

    //get stock by symbol and add to stocks array
    this.addStockBySymbol(symbol);
  }

  remove(stock: string) {
    // Remove symbol from array
    this.stockSymbols = this.stockSymbols.filter((item) => item !== stock);

    this.updateStocks();

    // Remove stock from localStorage
    this.localStorage.removeStockSymbol(stock);
  }

  addStockBySymbol(symbol: string) {
    //--------------FIX-----------------

    let stock: Stock = new Stock();

    stock.symbol = symbol;
    this.finnhub.getCompanyName(symbol).subscribe((data: any) => {
      stock.companyName = data?.result[0]?.description;
    });
    this.finnhub.getQuote(symbol).subscribe((data: any) => {
      stock.changePercentage = data?.dp;
      stock.currentPrice = data?.c;
      stock.highPrice = data?.h;
      stock.openingPrice = data?.o;
    });

    this.stocks.push(stock);
  }
}
