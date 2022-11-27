import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css'],
})
export class TrackerFormComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  // Form Group and Controls
  trackerForm = new FormGroup({
    stockSymbol: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
    ]),
  });

  @Output() addStockSymbol = new EventEmitter<string>();

  ngOnInit() {}

  onSubmit() {
    if (this.trackerForm.valid) {
      let symbol: string = this.trackerForm.get('stockSymbol').value;

      // Add symbol to Array
      this.addStockSymbol.emit(symbol);

      // Add symbol to Localstorage
      this.localStorageService.addStockSymbol(symbol);

      // Reset form
      this.trackerForm.reset();
    }
  }
}
