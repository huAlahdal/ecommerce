import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecmorse';
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
