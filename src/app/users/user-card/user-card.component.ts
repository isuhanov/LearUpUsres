import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lu-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public isModalOpen:boolean = false;

  @Input()
  public id: number = 0;

  @Input()
  public fio: string = '';

  @Input()
  public address: string = '';

  constructor() { }

  public onClickChange() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngOnInit(): void {
  }

}
