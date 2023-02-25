import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  workImages = [];
  projects = [];

  ngOnInit() {
    this.loadImages();
    this.projectname();
    console.log(this.projectname);
  }

  loadImages() {
    this.workImages = [
      'preview-homepage.jpg',
      'preview-join.jpg',
      'preview-polo-loco.jpg',
      'preview-ring-of-fire.png',
    ];
  }

  projectname() {
    this.projects = ['PORTFOLIO', 'JOIN', 'POLLO LOCO', 'RING-OF-FIRE'];
  }
}
