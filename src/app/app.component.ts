import { Component } from '@angular/core';
import { AutocompleteComponentComponent } from './autocomplete-component/autocomplete-component.component';

@Component({
  selector: 'app-root',
  template: `
  <app-autocomplete-component [data]=countries> </app-autocomplete-component>

  `
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
   public countries =  ["Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein",
                        "Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands",
                        "Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia",
                        "Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
 
}
