import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';
import {HttpClient} from '@angular/common/http';
import {cards} from './cards';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {
  user: any;
  cards: any;
  displayedCard: any;

  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.user = this.sessionstorage.getSession(token);
    this.cards = cards;
    this.displayWalletTransactions(1);
  }

  openModal() {
    document.querySelector('.modal').classList.add('open');
  }

  closeModal() {
    document.querySelector('.modal').classList.remove('open');
  }

  addNewWallet() {
    if (window.localStorage.getItem('newWalletInProgress') !== 'true') {
      window.localStorage.setItem('newWalletInProgress', 'true');
      const walletContainer = document.getElementById('wallet-container');
      const formDiv = document.createElement('div');
      const walletName = document.createElement('input');
      const cancelButton = document.createElement('button');
      formDiv.className = 'wallet-entry-form';
      formDiv.id = 'wallet-entry-form';
      formDiv.setAttribute(
        'style',
        'padding: 15px; ' +
        'background-color: #fff; ' +
        'margin-bottom: 45px; ' +
        'border-radius: 3px; ' +
        'border: 2px solid #e1e1e1; ' +
        'font-family: \'Roboto\', sans-serif; ' +
        'cursor: pointer; ' +
        'height: 94px; '
      );
      walletName.className = 'wallet-name';
      walletName.setAttribute('name', 'wallet-name');
      walletName.setAttribute('style', 'width: 100%');
      walletName.setAttribute('maxlength', '20');
      cancelButton.className = 'cancel-button';
      cancelButton.id = 'wallet-cancel-button';
      cancelButton.innerHTML = 'Cancel creation';
      cancelButton.setAttribute(
        'style',
        'background: none; ' +
        'border: 1px solid; ' +
        'border-color: salmon; ' +
        'color: salmon; ' +
        'border-radius: 4px; ' +
        'margin-top: 10px; ' +
        'float: right;'
      );
      formDiv.appendChild(walletName);
      formDiv.appendChild(cancelButton);
      walletContainer.insertBefore(formDiv, walletContainer.childNodes[2]);
      walletName.addEventListener('change', this.createWallet);
      walletName.focus();
      walletName.select();
    }
  }

  createWallet() {
    const formDiv = document.getElementById('wallet-entry-form');
    const walletName = formDiv.children.namedItem('wallet-name') as HTMLInputElement;
    console.log(walletName.value);
    const walletNameDisplay = document.createElement('div');
    walletNameDisplay.className = 'wallet-name';
    walletNameDisplay.innerHTML = walletName.value;
    const balance = document.createElement('div');
    balance.innerHTML = '0';
    const currency = document.createElement('div');
    currency.innerHTML = 'USD';
    formDiv.replaceChild(walletNameDisplay, walletName);
    formDiv.removeChild(document.getElementById('wallet-cancel-button'));
    formDiv.appendChild(balance);
    formDiv.appendChild(currency);
    formDiv.className = 'credit-card';
    window.localStorage.removeItem('newWalletInProgress');
  }

  displayWalletTransactions(walletId: number) {
    for (let card of cards) {
      if (card.id === walletId) {
        this.displayedCard = card;
      }
    }
  }

  addBalance() {
    window.alert('Add balance worked');
  }
}
