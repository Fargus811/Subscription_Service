import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  serviceFormGroup: FormGroup;
  inputs = [3];
  fields: number;
  fieldsList = [this.fields];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
  this.serviceFormGroup = this.formBuilder.group({
    name: [],
    cost: [],
    description: []
  });

  }
  addField(){
   if (this.fields <= 4) {
     this.fields++;
     this.fieldsList = [this.fields];
   }
  }
  onSubmit() {
    this.httpClient.post<any>('http://localhost:8080/personal/myservices/1/add', this.serviceFormGroup.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
