import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private router : Router) { }

  mockInventory:Inventory[] = mock_inventory;
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','action'];
  dataSource = new MatTableDataSource(this.mockInventory);
  //dataSource = this.mockInventory;

  
  ngOnInit() {
    console.log("MOCK DATA--",this.mockInventory);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
