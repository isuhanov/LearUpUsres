import { Component, OnInit } from '@angular/core';

interface IUsers {
  fio: string,
  address : string
}

@Component({
  selector: 'lu-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  public users:Array<IUsers> = [
    {
      fio: 'Суханов Игнат',
      address : 'Ул. Федора Полетаева, 25, 138'
    },
    {
      fio: 'Суханов Игнат',
      address : 'Ул. Федора Полетаева, 25, 138'
    },
    {
      fio: 'Суханов Игнат',
      address : 'Ул. Федора Полетаева, 25, 138'
    },
    {
      fio: 'Суханов Игнат',
      address : 'Ул. Федора Полетаева, 25, 138'
    },
    {
      fio: 'Суханов Игнат',
      address : 'Ул. Федора Полетаева, 25, 138'
    },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
