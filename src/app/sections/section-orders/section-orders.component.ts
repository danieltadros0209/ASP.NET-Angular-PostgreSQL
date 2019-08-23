import { Component, OnInit } from '@angular/core';
import { Order } from "../../shared/order";

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:123,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
    {id: 2, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:223,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
    {id: 3, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:323,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
    {id: 4, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:423,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
    {id: 5, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:523,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
    {id: 6, 
      customer:{id:1,name:'name',state:'tr',email:'name@example.com'},
      total:623,placed:new Date(2019,8,1), fulfilled: new Date(2019,8,3)},
  ];

  ngOnInit() {
  }

}
