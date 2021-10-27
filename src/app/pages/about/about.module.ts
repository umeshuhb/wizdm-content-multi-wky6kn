import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentRouterModule, RoutesWithContent, ContentConfigurator, ContentLoader } from '../../content';
import { AboutComponent } from './about.component';
import { map } from 'rxjs/operators';

const routes: RoutesWithContent = [
  {
    path: '',
    component: AboutComponent,
    content: 'about'
  }
];

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    ContentRouterModule.forChild(routes)
  ]
})
export class AboutModule { }