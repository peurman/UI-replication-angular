import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { TeamBoxComponent } from './team-box/team-box.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { OnGoingBoxComponent } from './on-going-box/on-going-box.component';
import { OnGoingCardComponent } from './on-going-card/on-going-card.component';
import { DynamicBoxComponent } from './dynamic-box/dynamic-box.component';
import { AvatarGeneratorComponent } from './avatar-generator/avatar-generator.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, RadarChartComponent, TeamBoxComponent, TeamCardComponent, OnGoingBoxComponent, OnGoingCardComponent, DynamicBoxComponent, AvatarGeneratorComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
