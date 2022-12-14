import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { FinnhubService } from '../../services/finnhub.service';
import { LoaderService } from '../../services/loader.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private localStorage: LocalStorageService,
    private finnhub: FinnhubService,
    private loaderService: LoaderService
  ) {
    this.loaderService.loader.subscribe((res) => {
      this.loading = res;
    });
  }

  loading: Boolean;

  stockSymbols: string[] = [];

  stocks: Stock[] = [];

  ngOnInit() {
    //get all stock symbols from localStorage
    this.stockSymbols = this.localStorage.getAllStockSymbols();

    //update all stocks
    this.updateStocks();
  }

  addSymbol(symbol: string) {
    //add symbol to stockSymbols array
    this.stockSymbols.push(symbol);

    //add stock
    this.addStock(symbol);

    //add stocks to localStorage
    this.localStorage.addStockSymbol(symbol);
  }

  remove(symbol: string) {
    // Remove stock symbol
    this.stockSymbols = this.stockSymbols.filter((sym) => sym !== symbol);

    // Remove stock
    this.stocks = this.stocks.filter((stock) => stock.symbol !== symbol);

    // Remove stock from localStorage
    this.localStorage.removeStockSymbol(symbol);
  }

  updateStocks() {
    this.stockSymbols.forEach((sym) => {
      this.addStock(sym);
    });
  }

  addStock(symbol: string) {
    //converting symbols into stock after fetching details and adding into the array
    let stock: Stock = new Stock();

    stock.symbol = symbol;
    this.finnhub.getCompanyName(symbol).subscribe((res: any) => {
      stock.companyName = res?.result[0]?.description;
    });
    this.finnhub.getQuote(symbol).subscribe((res: any) => {
      stock.changePercentage = res?.dp;
      stock.currentPrice = res?.c;
      stock.highPrice = res?.h;
      stock.openingPrice = res?.o;
    });

    this.stocks.push(stock);
  }
}
