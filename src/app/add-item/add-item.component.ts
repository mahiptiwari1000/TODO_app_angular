import { Component, OnInit } from '@angular/core';


interface Todo{
  item_name:string;
  isFalse:boolean;

}


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  items:Array<Todo> = [
    {
      item_name:"Groceries",
      isFalse:false
    },
    {
      item_name:"Music",
      isFalse:false
    },
    {
      item_name:"Study",
      isFalse:false
    }
  ];
  
  addTask(input){
  let value = input.value;
  input.value = '';
  this.items.push({
    item_name:value,
    isFalse:false
  });
  }
  
  clearToDo(){
    let do_delete = confirm("Are you sure to delete all the tasks?");
  
    if(do_delete){
      this.items.splice(0);
    }
  }
  
  cancelTask(idx:number){
    if(this.items[idx].isFalse){
      this.items[idx].isFalse = false;
    }
    else{
      this.items[idx].isFalse = true;
    }
  }
  
  deleteTask(idx:number){
    let deleteItem = confirm("Are you sure you want to delete the task?");
    if(deleteItem){
      this.items.splice(idx,1);
    }
  }
  
  editTask(idx:number){
    let title = this.items[idx].item_name;
    let result = prompt("Edit Task Title",title);
    if(result!=null && result!==""){
      this.items[idx].item_name = result;
    }
  }


}
