import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../domain';
import { API_SERVER_PATH } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class DbUserService {

  constructor(private httpClient: HttpClient,
    @Inject(API_SERVER_PATH) private apiServerPath: string) {
  }

  public update(id: number, user: User): Promise<User> {
    return firstValueFrom(this.httpClient.put<User>(`${ this.apiServerPath }/users/${ id }`, user))
  }

  public readAll(): Promise<readonly User[]> {
    return firstValueFrom(this.httpClient.get<readonly User[]>(`${ this.apiServerPath }/users`))
  }

}

