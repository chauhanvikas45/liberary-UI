import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private router : Router) { }

  mockInventory:Inventory[] = mock_inventory;
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','action'];
  dataSource = this.mockInventory;
  

  
  ngOnInit() {
    console.log("MOCK DATA--",this.mockInventory);
  }

  editItem(item: Inventory) {
    console.log("edit method called "+item);
    //this.store.dispatch(new itemsActions.SetCurrentItemId(item.bookId));
    //this.router.navigate(['/items', item.bookId, 'edit'])
  }

  addBook(){
    console.log("in add book form");
    this.router.navigate(['./add-book']);
  }
}
