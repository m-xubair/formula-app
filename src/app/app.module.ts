import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { ManageEquations } from 'src/app/manage-equations/manage-equations.component';
import { EquationService } from 'src/app/services/equation.service';
import { AppComponent } from './app.component';
import { ViewEquationsComponent } from './view-equations/view-equations.component';

@NgModule({
  declarations: [AppComponent, ManageEquations, ViewEquationsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.56)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [EquationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
