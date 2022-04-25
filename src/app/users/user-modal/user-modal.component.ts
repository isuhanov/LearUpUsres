import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lu-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Input()
  public id: number| null = null;

  @Input()
  public fio: string | null = null;

  @Input()
  public address: string | null = null;

  @Output()
  modalClose = new EventEmitter()

  constructor() { }

  public onClickSave() {
    console.log(this.id, this.fio, this.address);

    this.modalClose.emit();
  }

  ngOnInit(): void {
  }

}
