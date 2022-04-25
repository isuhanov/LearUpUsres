import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lu-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public isModalOpen:boolean = false;

  @Input()
  public id: number| null = null;

  @Input()
  public fio: string | null = null;

  @Input()
  public address: string | null = null;
  
  // @Output()
  // changeFio = new EventEmitter();

  constructor() { }

  public onClickChange() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngOnInit(): void {
  }

}
