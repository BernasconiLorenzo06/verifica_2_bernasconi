import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  macchine : string[];
  constructor() {
    this.macchine = ["Tesla","Audi","Fiat","Ford","Jeep","Ferrari","Lamborghini","Porche","500","KIA"];
  }
  ngOnInit(): void {
   
  }

}
