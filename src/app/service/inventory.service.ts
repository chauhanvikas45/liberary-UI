import { Injectable } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class InventoryService {
 // mockInventory:Inventory[] =mock_inventory;
  url : string = 'http://localhost:3000/inventory';
  public bookList= new Array<Inventory>();

  constructor(private http: HttpClient) { }

  getItems(resource:string ) {
    return this.http.get(this.url)
  }

}
