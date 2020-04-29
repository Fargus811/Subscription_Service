import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  serviceFormGroup: FormGroup;
  inputs = [3];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.serviceFormGroup = this.formBuilder.group({
      serviceName: [],
      costName: [],
      fullDescription: [],
      shortDescriptionLine1: []
    });

  }

  addField() {
    const container = document.getElementById('short-descriptions-container');
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const field = document.createElement('div');
    field.className = 'fieldWithButton';
    const input = document.createElement('input');
    input.className = 'form-control';
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Maximum chars 15');
    input.setAttribute('maxlength', '15');
    field.appendChild(input);
    formGroup.appendChild(field);
    container.appendChild(formGroup);
  }

}
