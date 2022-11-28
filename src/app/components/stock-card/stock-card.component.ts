import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Stock } from '../../models/stock';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
})
export class StockCardComponent implements OnInit {
  @Input() stock: Stock;

  @Output() removeStock = new EventEmitter<string>();

  constructor() {}

  remove(symbol: string) {
    this.removeStock.emit(symbol);
  }

  ngOnInit() {}
}
