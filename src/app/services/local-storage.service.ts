import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  addStockSymbol(stockSymbol: string): void {
    const oldStockData = localStorage.getItem('stocks');

    if (oldStockData !== null) {
      const oldStockSymbols: string[] = JSON.parse(oldStockData);
      oldStockSymbols.push(stockSymbol);
      localStorage.setItem('stocks', JSON.stringify(oldStockSymbols));
    } else {
      localStorage.setItem('stocks', JSON.stringify([stockSymbol]));
    }
  }

  removeStockSymbol(stockSymbol: string): void {
    const oldStockData = localStorage.getItem('stocks');
    if (oldStockData !== null) {
      const oldStockSymbols: string[] = JSON.parse(oldStockData);
      const newStockSymbols: string[] = oldStockSymbols.filter(
        (item) => item !== stockSymbol
      );
      localStorage.setItem('stocks', JSON.stringify(newStockSymbols));
    }
  }

  getAllStocksSymbols(): string[] {
    const stocksData = localStorage.getItem('stocks');
    if (stocksData !== null) {
      return JSON.parse(stocksData);
    }
    return [];
  }
}
