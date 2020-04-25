import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms' ;
import { RxwebValidators, NumericValueType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  name = 'Angular';
  userFormGroup: FormGroup;
  creditCardTypes = [
    'Visa',

    'AmericanExpress',

    'Maestro',

    'JCB',

    'Discover',

    'DinersClub',

    'MasterCard'
];
  constructor(private formBuilder: FormBuilder){}


  ngOnInit(){
    this.userFormGroup = this.formBuilder.group({
      cardType: [ 'Visa'],
      creditCard: ['', RxwebValidators.creditCard ({fieldName: 'cardType'})],
      cvvCard: ['', RxwebValidators.numeric({acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })],
      ownerName: ['', RxwebValidators.alpha({allowWhiteSpace: true })],
    });
  }

  nameToUpperCase(){
    const node = document.getElementById('owner') as HTMLInputElement;
    node.value = node.value.toUpperCase();
  }
}

