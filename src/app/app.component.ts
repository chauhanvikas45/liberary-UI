import { Component } from '@angular/core';
//import { FooterComponent } from './footer/footer.component';
import { FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';
import { InventoryService } from './service/inventory.service';
import { Inventory } from './models/Inventory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liberary-UI';
  inventory: Array<Inventory>;
  constructor(){

  }
  ngOnInit() {
  //   this.inventoryService.get().subscribe(res => {
  //     this.inventory = res;
  //   });
   }
}
