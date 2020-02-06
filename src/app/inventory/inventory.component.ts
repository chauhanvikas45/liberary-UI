import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, } from '@angular/material';
import { InventoryService } from '../service/inventory.service';
import { InventoryList } from '../models/inventoryList';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  show: boolean;
  inventory = new InventoryList();
  bookList=[];
  displayedColumns: string[] = ['id', 'name', 'author', 'category','price','status'];
  public dataSource; 
  
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  inventoryTable: boolean;
  
  
  constructor(private router : Router, private inventoryService:InventoryService,public dialog: MatDialog) { 
    this.getInventoryList();
    }
 
    ngOnInit() {
      this.inventoryTable=true
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
    console.log("in add book")
    this.inventory.status='available'
    this.inventoryService.postRequest('/inventory',this.inventory).subscribe((result:[]) =>{
    this.bookList.push(result);  
    this.dataSource.paginator = this.paginator;
    })
    console.log("after add book")
    this.formClear()
    this.show =false;
    
  }

  formClear() {
    this.inventory.bookName='';
    this.inventory.authorName='';
    this.inventory.category='';
    this.inventory.bookPrice=0;
    this.inventory.status='available';
  }

  toggle(){
    console.log("in add book form");
    //this.router.navigate(['./add-book']);
    if(this.show==false){
      this.inventoryTable=false;
      this.show =true;
    }else{
      this.show=false;
      this.inventoryTable=true;
    }
  }

  openDialog(): void {
    console.log("open dialog called");
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {name: this.inventory.bookName, author: this.inventory.authorName,category: this.inventory.authorName,price: this.inventory.bookPrice}
      
    });
    console.log("before close dialog")
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bookList = result;
    });
  }

}


@Component({
  selector: 'add-book-form',
  templateUrl: './add-book-form.html',
})
export class DialogOverviewExampleDialog {
  inventory= new InventoryList();
  //inventoryService: any;
  bookList=[];
  inventoryComponent :InventoryComponent
  show: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryComponent, private inventoryService : InventoryService) {
      console.log("inject called");
    }

  onNoClick(): void {
    console.log("onNoclick callaed");
    this.dialogRef.close();
  }

  addBook(){
    console.log("in add book")
    this.inventory.status='available'
    this.inventoryService.postRequest('/inventory',this.inventory).subscribe((result:[]) =>{
    this.bookList.push(result);  
    this.inventoryComponent.dataSource.paginator = this.inventoryComponent.paginator;
    })
    console.log("after add book")
    this.formClear()
    this.show =false;
    
  }
  formClear() {
    throw new Error("Method not implemented.");
  }

}