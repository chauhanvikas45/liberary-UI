import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryList } from '../models/inventoryList';
import { InventoryService } from '../service/inventory.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Inventory } from '../models/Inventory';


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
  displayedColumns: string[] = ['id','name', 'author', 'category','price','status'];
  private dataSource: MatTableDataSource<any>; 
  inventoryTable: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  list: Inventory[];

  
  constructor(private inventoryService : InventoryService ) {
    this.inventoryTable=true;
   }

  ngOnInit() {
    this.inventoryTable=true;
    this.inventoryService.getRequest('/inventory').subscribe((result :[])=>{
      this.bookList =result;
      
        //this.list=this.bookList.filter(item =>{
          //item.status ==='available';
      
    });
    this.list=this.bookList.filter((item) =>{
      console.log('item ======'+item.status);
      item.status =='available';
      console.log('if condition -------'+item.status =='available')
    this.dataSource = new MatTableDataSource(this.list);
    console.log('list -------'+this.list);
    });
}

  getBookList(status: String){
      
      console.log('book status -----'+status);
      console.log('booklist -----'+this.bookList);

      if(status==='available'){
          this.list=this.bookList.filter((item) =>
           item.status === 'available'
        )
        this.dataSource = new MatTableDataSource(this.list);
        console.log('available book -----'+this.list)
      }else{
        this.list=this.bookList.filter((item) =>
          item.status ==='issued'
        )
        this.dataSource = new MatTableDataSource(this.list);
        console.log('issued book -----'+this.list)
      }  
      this.dataSource = new MatTableDataSource(this.list);
      console.log('datasource ------'+this.dataSource);
      this.dataSource.paginator = this.paginator;
  }

  toggle(form:boolean){
    console.log("in show form");
    //this.router.navigate(['./add-book']);
    if(form==true){
      this.showIssueForm =true;
      this.showReturnForm=false;
      console.log('issueForm-----'+this.showIssueForm  );
      console.log('retutnForm-----'+this.showReturnForm  );

    }else{
      this.showIssueForm=false;
      this.showReturnForm=true;
      console.log('issueForm-----'+this.showIssueForm  );
      console.log('retutnForm-----'+this.showReturnForm  );
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
