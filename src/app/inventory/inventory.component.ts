import { Component, OnInit, ViewChild } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { mock_inventory } from '../Mock_data/mock_data_inventory';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../service/inventory.service';
import { InventoryList } from '../models/inventoryList';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  show: boolean;
  inventory = new InventoryList();
  bookList=[];
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','action'];
  dataSource; 
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(private router : Router, private inventoryService:InventoryService) { 
    this.getInventoryList();
    }
 
    ngOnInit() {
     this.getInventoryList()
   }
 

  getInventoryList(){
    this.inventoryService.getReequest('/inventory').subscribe((result:[]) => {
    this.bookList = result;
    this.dataSource = new MatTableDataSource(this.bookList);
    this.dataSource.paginator = this.paginator;
    });
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  
  addBook(){
    this.inventoryService.postRequest('/inventory',this.inventory).subscribe((result:[]) =>{
      this.bookList=result;
      this.getInventoryList();
    })
    
    this.formClear()
    this.show =false;
    
  }

  formClear() {
    this.inventory.bookName='';
    this.inventory.authorName='';
    this.inventory.category='';
    this.inventory.bookPrice=0;
  }

  toggle(){
    console.log("in add book form");
    //this.router.navigate(['./add-book']);
    if(this.show==false){
      this.show =true;
    }else{
      this.show=false;
    }
  }
}
