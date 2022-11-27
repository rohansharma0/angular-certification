import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SentimentPageComponent } from './pages/sentiment-page/sentiment-page.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { TrackerFormComponent } from './components/tracker-form/tracker-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
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
