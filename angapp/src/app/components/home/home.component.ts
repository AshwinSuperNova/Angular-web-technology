import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() parentdata:string | undefined; 
  @Output() public senddata=new EventEmitter<any[]>();
  users:any[]=[
    {stud_id:101,stud_name:"ashwin",stud_dept:"It",DOB:"18-04-2002",salary:2000000,},
    {stud_id:102,stud_name:"ashwin rockers",stud_dept:"cse",DOB:"18-04-2002",salary:2000000,},
    {stud_id:103,stud_name:"ashwin pirate",stud_dept:"mech",DOB:"18-04-2002",salary:3000000,},
    {stud_id:104,stud_name:"ashwin rocks",stud_dept:"civil",DOB:"18-04-2002",salary:4000000,},
    {stud_id:105,stud_name:"ashwin rookie",stud_dept:"EEE",DOB:"18-04-2002",salary:5000000,},

  ];
  ngOnInit(){
    this.senddata.emit(this.users);
  }

}
