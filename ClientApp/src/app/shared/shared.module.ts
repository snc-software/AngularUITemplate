import { NgModule } from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatMenuModule
  ],
  exports: [
    CommonModule, 
    RouterModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatMenuModule
  ]
})
export class SharedModule {}
