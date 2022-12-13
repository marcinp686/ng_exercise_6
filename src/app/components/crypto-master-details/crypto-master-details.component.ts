import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BinanceService } from 'src/app/services/binance.service';
import { CryptoModel } from 'src/app/models/crypto.model';

@Component({
  selector: 'app-crypto-master-details',
  templateUrl: './crypto-master-details.component.html',
  styleUrls: ['./crypto-master-details.component.scss']
})
export class CryptoMasterDetailsComponent implements OnInit {

  cryptos!        : Observable<CryptoModel[]>;
  selectedCrypto  : Subject<CryptoModel> = new Subject<CryptoModel>(); 

  constructor(private binance: BinanceService) { }

  ngOnInit(): void {
    this.cryptos = this.binance.getCryptos();
  }

  onCryptoSelect(crypto: CryptoModel) : void {
    this.selectedCrypto.next(crypto);
  }

}
