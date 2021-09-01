import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      email: ["", [Validators.email]],
      // text: ["", [Validators.maxLength(80)]],
    });

    // this.form.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
    //   console.log(value);
    // });
  }
  save(event: Event) {
    console.log("enviar");
    if (this.form.valid) {
      const value = this.form.value;
    } else {
      this.form.markAsTouched();
    }
    if (this.form.valid) {
      alert(`Muchas gracias por suscribirte ;) ${this.form.value.name}!!!`);
      this.form.reset(); //reset form value
    }
    console.log(this.form.value);
  }

  get name() {
    return this.form.get("name");
  }

  get email() {
    return this.form.get("email");
  }

  // get text() {
  //   return this.form.get("text");
  // }
}
