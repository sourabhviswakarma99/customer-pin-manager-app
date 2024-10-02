import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css']
})
export class PinListComponent implements OnInit {

  pins:any = [];
  
  constructor() { }

  ngOnInit(): void {
    this.loadPinsData();
  }

  loadPinsData() {
    const storedData = localStorage.getItem('pinsData');
    if (storedData) {
      this.pins = JSON.parse(storedData);
      console.log(this.pins);
    }
  }


}
