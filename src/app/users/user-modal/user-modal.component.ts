import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DadataAddress, DadataConfig, DadataSuggestion, DadataType } from '@kolkov/ngx-dadata';

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
  public id: number| null = null;

  @Input()
  public fio: string | null = null;

  @Input()
  public address: string | null = null;

  @Output()
  modalClose = new EventEmitter()

  constructor() { }

  public onAddressSelected(event: DadataSuggestion) {
    const addressData = event.data as DadataAddress;
    console.log(addressData);
  }

  public onClickSave() {
    console.log(this.id, this.fio, this.address);
    this.modalClose.emit();
  }

  ngOnInit(): void {
  }

}
