import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AutocompleteComponentComponent } from './autocomplete-component/autocomplete-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
