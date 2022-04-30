import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DadataAddress, DadataConfig, DadataSuggestion, DadataType } from '@kolkov/ngx-dadata';
import { DbUserService } from 'src/app/lib/db-user.service';

@Component({
  selector: 'lu-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  config: DadataConfig = {
    apiKey: 'c2e5ee63d9065eed0e5d62a51054901ddd64c398',
    type: DadataType.address
  };

  @Input()
  public id: number = 0;

  @Input()
  public fio: string = '';

  @Input()
  public address: string = '';

  @Output()
  modalClose = new EventEmitter()

  constructor(private dbUserServices: DbUserService) { }

  public onAddressSelected(event: DadataSuggestion) {
    const addressData = event.data as DadataAddress;
  }

  public onClickSave() {
    this.dbUserServices.update({ fio: this.fio, address: this.address, id:this.id}).then(()=>{
      console.log(`Успешное обновление пользователя с id = ${this.id}`);
    }).catch((reason)=>{
      console.log(reason);
      
    })
    
    this.modalClose.emit();
  }

  ngOnInit(): void {
  }

}
