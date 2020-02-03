import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { Router } from '@angular/router';
import { MatTableDataSource, } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../service/inventory.service';
//import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  show: boolean;
  
  constructor(private router : Router, private inventoryService:InventoryService) { }

  mockInventory:Inventory[] = mock_inventory;
 bookList=[];
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','action'];
  dataSource = new MatTableDataSource(this.bookList);
  //dataSource = this.mockInventory;

  empty = new FormControl('', [Validators.required, Validators.nullValidator]);

  getErrorMessage() {
    return this.empty.hasError('required') ? 'You must enter a value' :
        this.empty.hasError('price') ? 'Not valid ' :
            '';
  }
  ngOnInit() {
    
    //console.log("MOCK DATA--",this.mockInventory);
    this.getInventoryList();
  }


  getInventoryList(){
    this.inventoryService.getItems('inventory').subscribe((result:[]) => {
      //console.log(result);
      this.bookList = result;
    });
    console.log("newwwwww "+this.bookList);
    console.log("end");
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
    //this.router.navigate(['./add-book']);
    this.show =false;
    
  }
  add(){
    console.log("in add book form");
    //this.router.navigate(['./add-book']);
    this.show =true;
    
  }
}
