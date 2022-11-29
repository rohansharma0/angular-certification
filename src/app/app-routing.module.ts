import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SentimentPageComponent } from './pages/sentiment-page/sentiment-page.component';

// All routes
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sentiment/:symbol', component: SentimentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
