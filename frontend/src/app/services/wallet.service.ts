import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient: HttpClient) { }
  createWallet(walletName: string, userId: number){
    const params = {name: walletName};
    this.httpClient.post(`/api/wallet/byUser/${userId}/add`, params);
  }

  getUserWallets(userId: number) {
    return this.httpClient.get(`/api/wallet/${userId}`);
  }
}


