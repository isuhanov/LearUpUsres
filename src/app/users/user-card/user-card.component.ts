import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/domain';
import { DbUserService } from 'src/app/lib/db-user.service';

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

  constructor(private dbUserServices:DbUserService) { }

  public onClickChange() {
    this.isModalOpen = !this.isModalOpen;
  }

  public onModalClose() {
    this.dbUserServices.getUser(this.id).then((user:User)=>{
      this.fio = user.fio;
      this.address = user.address;
    });
    this.isModalOpen=false
  }

  ngOnInit(): void {
  }

}
