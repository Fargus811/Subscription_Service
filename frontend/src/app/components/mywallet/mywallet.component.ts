import {Component, OnInit, Renderer2} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';
import {HttpClient} from '@angular/common/http';
import {cards} from './cards';
import {WalletService} from '../../services/wallet.service';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})

export class MywalletComponent implements OnInit {
  constructor(
    private sessionstorage: LocalstorageService,
    private http: HttpClient,
    private renderer: Renderer2,
    private walletService: WalletService
  ) {
  }

  user: any;
  cards: any;
  displayedCard: any;

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
      const formDiv = this.renderer.selectRootElement('div#wallet-entry-form', true);
      this.renderer.setStyle(formDiv, 'display', 'block');
      const walletName = this.renderer.selectRootElement('input.wallet-name');
      walletName.focus();
      walletName.select();
    }
  }

  cancelCreation() {
    const formDiv = this.renderer.selectRootElement('div#wallet-entry-form', true);
    this.renderer.setStyle(formDiv, 'display', 'none');
    const walletName = this.renderer.selectRootElement('input.wallet-name');
    this.renderer.setAttribute(walletName, 'value', '');
    window.localStorage.removeItem('newWalletInProgress');
  }

  createWallet(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    console.log(target);
    const name = target.value;
    console.log(name);
    this.walletService.createWallet(name, this.user.id);
    this.cards = this.walletService.getUserWallets(this.user.id);
    this.cancelCreation();
    console.log(this.cards);
  }

  displayWalletTransactions(walletId: number) {
    console.log(this.cards);
    for (let card of this.cards) {
      if (card.id === walletId) {
        this.displayedCard = card;
      }
    }
  }

  addBalance() {
    window.alert('Add balance worked');
  }
}
