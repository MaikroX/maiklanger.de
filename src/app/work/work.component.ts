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
      'preview-homepage-my.jpg',
      'preview-join-my.jpg',
      'preview-pollo-loco-my.png',
      'preview-pokedex-my.png',
      'preview-ring-of-fire.jpg',
    ];
  }

  projectname() {
    this.projects = [
      'PORTFOLIO',
      'JOIN',
      'POLLO LOCO',
      'POKEDEX',
      'RING OF FIRE',
    ];
  }
}
