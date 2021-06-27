import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlComponent } from './url/url.component';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  { path: 'url', component: UrlComponent },
  { path: 'cover', component: CoverComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class CreateRoutingModule {};
