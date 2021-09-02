import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { RegisterformComponent } from "./pages/registerform/registerform.component";

const app_routes: Routes = [
  {
    path: "home",
    component: PortafolioComponent,
    data: {
      title: "Title for Portfolio Component",
      descrption: "Description of Portfolio Component",
      ogTitle: "Description of Portfolio Component for social media",
    },
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      title: "Title for About Component",
      descrption: "Description of About Component",
      ogTitle: "Description of About Component for social media",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: {
      title: "Title for Contact Component",
      descrption: "Description of Contact Component",
      ogTitle: "Description of Contact Component for social media",
    },
  },
  {
    path: "item",
    component: ItemComponent,
    data: {
      title: "Title for Contact Component",
      descrption: "Description of Item Component",
      ogTitle: "Description of Item Component for social media",
    },
  },
  {
    path: "registerform",
    component: RegisterformComponent,
    data: {
      title: "Title for Contact Component",
      descrption: "Description of Item Component",
      ogTitle: "Description of Item Component for social media",
    },
  },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
