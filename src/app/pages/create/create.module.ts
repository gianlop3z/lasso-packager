import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { UrlComponent } from './url/url.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    UrlComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule
  ]
})
export class CreateModule {};
