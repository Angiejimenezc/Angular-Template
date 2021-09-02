import { Component, OnInit } from "@angular/core";
import { InfoPaginaService } from "../../services/info-pagina.service";

import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  title: "EsSOSTenible";

  constructor(
    public _servicio: InfoPaginaService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRouter);
        rt.data.subscribe((data: any) => {
          console.log(data);
          this.titleService.setTitle(data.title);

          if (data.description) {
            this.metaService.updateTag({
              name: "description",
              content: data.description,
            });
          } else {
            this.metaService.removeTag("name='description'");
          }
          if (data.robots) {
            this.metaService.updateTag({
              name: "robots",
              content: data.robots,
            });
          } else {
            this.metaService.updateTag({
              name: "robots",
              content: "follow,index",
            });
          }
        });
      });
  }
  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  addTag() {
    this.metaService.addTag({
      name: "description",
      content: "Article Description",
    });
    this.metaService.addTag({ name: "robots", content: "index,follow" });
    this.metaService.addTag({
      property: "og:title",
      content: "Content Title for social media",
    });
  }
}
