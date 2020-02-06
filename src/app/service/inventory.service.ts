import { Injectable } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { InventoryComponent } from '../inventory/inventory.component';
import { Observable } from 'rxjs';
import { InventoryList } from '../models/inventoryList';

@Injectable({
  providedIn:'root'
})
export class InventoryService {
 // mockInventory:Inventory[] =mock_inventory;
  url : string = 'http://localhost:3000';
  public bookList= new Array<Inventory>();

  constructor(private http: HttpClient) { }

  getReequest(resource:string )  : Observable<Object> {
    return this.http.get(this.url+resource)
  }
  postRequest(resource: string,body:Inventory) : Observable<Object>{
    return this.http.post(this.url+resource,body)
  }

}
