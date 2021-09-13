import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  pageTitle = '';
  personaje = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.personaje = JSON.parse(params.personaje);
    });
  }

  ngOnInit() {
    this.pageTitle = this.personaje.name;
  }

}
