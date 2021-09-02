import { BrowserModule, Meta } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Rutas
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { RegisterformComponent } from "./pages/registerform/registerform.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    ContactComponent,
    RegisterformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
