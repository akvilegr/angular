import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public libelles = Object.values(State);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  public createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER,
      dateLivraison: '',
    });
  }

  public isError(field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  public process() {
    console.log(this.form.value);
  }


}



