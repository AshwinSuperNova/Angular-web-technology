import { Component,OnInit } from '@angular/core';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student:any;
  

  constructor(private dataService: DataService){}
  title = 'app';
  users: any;
  user: any;
 
  [x: string]: any;
  pageTitle:string="pipes and routing in angular";
  users1:any[]=[
    {stud_id:101,stud_name:"ashwin",stud_dept:"It",DOB:"18-04-2002",salary:2000000,},
    {stud_id:102,stud_name:"ashwin rockers",stud_dept:"cse",DOB:"18-04-2002",salary:2000000,},
    {stud_id:103,stud_name:"ashwin pirate",stud_dept:"mech",DOB:"18-04-2002",salary:3000000,},
    {stud_id:104,stud_name:"ashwin rocks",stud_dept:"civil",DOB:"18-04-2002",salary:4000000,},
    {stud_id:105,stud_name:"ashwin rookie",stud_dept:"EEE",DOB:"18-04-2002",salary:5000000,},

  ];
  ngOnInit() {
    
    this.dataService.getData()
      .subscribe(response => {
        this.student = response;
      });
}
  
  entername="ashwin";
  parentdata="";
  value:any[]=[];
  TransferData(){
   this.parentdata=this.entername;
  }
  senddata(data:any[]){
    this.value=data;
  }
  
 

}
