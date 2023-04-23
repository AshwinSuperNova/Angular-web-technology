import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
pageTitle:string="Data Binding In Angular";
pageTitle1:string="Eventbinding"
imageUrl:string="assets/luffy.jpg";
btnstatus:boolean=false;
changeTitle(){
  this.pageTitle1="Sun God Nika";
}
username:string="";
changeTitleback(){
  this.pageTitle1="Eventbinding";
}
changeimage(){
  this.imageUrl="assets/pillayarAppa.jpg"
}
changeimageback(){
  this.imageUrl="assets/luffy.jpg";
}
}
