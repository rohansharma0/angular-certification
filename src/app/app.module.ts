import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SentimentPageComponent } from './pages/sentiment-page/sentiment-page.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { TrackerFormComponent } from './components/tracker-form/tracker-form.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HomePageComponent,
    SentimentPageComponent,
    StockCardComponent,
    TrackerFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
