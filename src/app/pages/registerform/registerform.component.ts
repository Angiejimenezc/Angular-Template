import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registerform",
  templateUrl: "./registerform.component.html",
  styleUrls: ["./registerform.component.css"],
})
export class RegisterformComponent implements OnInit {
  constructor() {}

  registerform: any; //form Name

  ngOnInit(): void {
    this.registerform = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern("[0-9]*"),
      ]),
    });
  }

  // submit fuction
  submitData() {
    console.log(this.registerform.value);
    if (this.registerform.valid) {
      alert(
        `Muchas gracias por Registrarte ${this.registerform.value.firstName}!!!`
      );
      this.registerform.reset(); //reset form value
    }
  }

  get firstname() {
    return this.registerform.get("firstName"); //Firstname
  } //firstName

  get lastname() {
    return this.registerform.get("firstName"); //lastName
  }

  get email() {
    return this.registerform.get("email"); //email
  }
  get phone() {
    return this.registerform.get("phone"); //Phone
  }
}
