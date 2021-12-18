import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public addContact: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.addContact = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
    });
  }

  addSong() {
    if (!this.addContact.valid) {
      console.log('Nice try!');
    } else {
      console.log('Yeah!');
    }
  }
}
