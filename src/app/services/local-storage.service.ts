import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  //add stock symbol to loacal storage
  addStockSymbol(symbol: string): void {
    const oldStocksData = localStorage.getItem('stocks');

    if (oldStocksData !== null) {
      const oldStockSymbols: string[] = JSON.parse(oldStocksData);
      oldStockSymbols.push(symbol);
      localStorage.setItem('stocks', JSON.stringify(oldStockSymbols));
    } else {
      localStorage.setItem('stocks', JSON.stringify([symbol]));
    }
  }

  //remove stock symbol to loacal storage
  removeStockSymbol(symbol: string): void {
    const oldStocksData = localStorage.getItem('stocks');
    if (oldStocksData !== null) {
      const oldStockSymbols: string[] = JSON.parse(oldStocksData);
      const newStockSymbols: string[] = oldStockSymbols.filter(
        (sym) => sym !== symbol
      );
      localStorage.setItem('stocks', JSON.stringify(newStockSymbols));
    }
  }

  //get all symbol to loacal storage
  getAllStockSymbols(): string[] {
    const stocksData = localStorage.getItem('stocks');
    if (stocksData !== null) {
      return JSON.parse(stocksData);
    }
    return [];
  }
}
