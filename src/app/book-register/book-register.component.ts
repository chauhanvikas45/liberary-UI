import { Component, OnInit } from '@angular/core';
import { InventoryList } from '../models/inventoryList';


@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent implements OnInit {
  showReturnForm:boolean
  showIssueForm:boolean

  inventory = new InventoryList();
  bookList=[];
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','status'];
  dataSource; 
  constructor() { }

  ngOnInit() {
  }

  toggle(form:boolean){
    console.log("in show form");
    //this.router.navigate(['./add-book']);
    if(form==true){
      this.showIssueForm =true;
      this.showReturnForm=false;

    }else{
      this.showIssueForm=false;
      this.showReturnForm=true;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
